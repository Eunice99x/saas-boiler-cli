package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/username/project-name/internal/database"
	"github.com/username/project-name/internal/models"
	"net/http"
)

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
