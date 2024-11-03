package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/username/project-name/internal/database"
	"github.com/username/project-name/internal/models"
	"golang.org/x/crypto/bcrypt"
	"net/http"
	"strconv"
)

type UserUpdateInput struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

type AdminUpdateInput struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Role     string `json:"role"`
}

func GetAllUsers(c *gin.Context) {
	var users []models.User

	if err := database.DB.Find(&users).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": err})
	}

	c.JSON(http.StatusOK, gin.H{"users": users})
}

func GetUser(c *gin.Context) {
	user, exists := c.Get("user")
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "User not authenticated"})
		return
	}

	c.JSON(200, gin.H{
		"user": user,
	})
}

func UpdateUser(c *gin.Context) {
	authUser, exists := c.Get("user")
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "User not found in context"})
		return
	}
	currentUser := authUser.(models.User)

	targetID, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid user ID"})
		return
	}

	var targetUser models.User
	if err := database.DB.Where("id = ?", targetID).First(&targetUser).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	if currentUser.ID != uint(targetID) && currentUser.Role != "admin" {
		c.JSON(http.StatusForbidden, gin.H{"error": "You can only update your own profile"})
		return
	}

	// Handle updates based on user role
	if currentUser.Role == "admin" {
		var adminInput AdminUpdateInput
		if err := c.ShouldBindJSON(&adminInput); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		updates := map[string]interface{}{}
		if adminInput.Username != "" {
			updates["username"] = adminInput.Username
		}
		if adminInput.Email != "" {
			updates["email"] = adminInput.Email
		}
		if adminInput.Role != "" {
			updates["role"] = adminInput.Role
		}

		if adminInput.Password != "" {
			hashedPassword, err := bcrypt.GenerateFromPassword([]byte(adminInput.Password), bcrypt.DefaultCost)
			if err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
				return
			}
			updates["password"] = string(hashedPassword)
		}

		if err := database.DB.Model(&targetUser).Updates(updates).Error; err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update user"})
			return
		}
	} else {
		var userInput UserUpdateInput
		if err := c.ShouldBindJSON(&userInput); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		updates := map[string]interface{}{}

		if userInput.Username != "" {
			updates["username"] = userInput.Username
		}
		if userInput.Email != "" {
			updates["email"] = userInput.Email
		}

		if userInput.Password != "" {
			hashedPassword, err := bcrypt.GenerateFromPassword([]byte(userInput.Password), bcrypt.DefaultCost)
			if err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
				return
			}
			updates["password"] = string(hashedPassword)
		}

		if err := database.DB.Model(&targetUser).Updates(updates).Error; err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update user"})
			return
		}
	}

	database.DB.First(&targetUser, targetUser.ID)

	targetUser.Password = ""

	c.JSON(http.StatusOK, gin.H{
		"message": "User updated successfully",
		"user":    targetUser,
	})
}

func DeleteUser(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	if err := database.DB.Where("id = ?", id).Delete(&models.User{}).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": err})
		return
	}
	c.JSON(http.StatusOK, gin.H{"user deleted with id of :": id})
}
