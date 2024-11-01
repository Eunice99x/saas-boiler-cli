package main

import (
	"github.com/gin-gonic/gin"
	"github.com/username/project-name/internal/api"
	"github.com/username/project-name/internal/config"
	"github.com/username/project-name/internal/database"
	"log"
)

func main() {
	config.LoadConfig()

	if err := database.Connect(); err != nil {
		log.Fatalf("failed to connect to database: %v", err)
	}

	r := gin.Default()
	api.SetupRoutes(r)
	r.Run(":" + config.AppConfig.AppPort)
}
