package controllers

import (
	"fmt"
	"github.com/gin-gonic/gin"
	jwt2 "github.com/golang-jwt/jwt/v4"
	"github.com/username/project-name/internal/database"
	"github.com/username/project-name/internal/models"
	"golang.org/x/crypto/bcrypt"
	"net/http"
	"os"
	"time"
)

func RegisterUser(c *gin.Context) {
	var registerInput models.RegisterInput

	if err := c.ShouldBindJSON(&registerInput); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": fmt.Sprintf("invalid request data: %s", err.Error())})
		return
	}

	var existingUser models.User
	if err := database.DB.Where("email = ?", registerInput.Email).First(&existingUser).Error; err == nil && existingUser.ID != 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "email already registered"})
		return
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(registerInput.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("failed to hash password: %s", err.Error())})
		return
	}

	newUser := models.User{
		Username: registerInput.Username,
		Email:    registerInput.Email,
		Password: string(hashedPassword),
	}
	if err := database.DB.Create(&newUser).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("failed to create user: %s", err.Error())})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": newUser})
}

func LoginUser(c *gin.Context) {
	var loginInput models.LoginInput

	if err := c.ShouldBindJSON(&loginInput); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": fmt.Sprintf("invalid request data: %s", err.Error())})
		return
	}

	var existingUser models.User
	if err := database.DB.Where("email = ?", loginInput.Email).First(&existingUser).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "user not found"})
		return
	}

	if err := bcrypt.CompareHashAndPassword([]byte(existingUser.Password), []byte(loginInput.Password)); err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "invalid password"})
		return
	}

	generateToken := jwt2.NewWithClaims(jwt2.SigningMethodHS256, jwt2.MapClaims{
		"id":  existingUser.ID,
		"exp": time.Now().Add(time.Hour * 24).Unix(),
	})

	token, err := generateToken.SignedString([]byte(os.Getenv("JWT_SECRET")))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": fmt.Sprintf("failed to sign token: %s", err.Error())})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": token})
}
