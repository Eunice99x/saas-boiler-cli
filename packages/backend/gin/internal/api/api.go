package api

import (
	"github.com/gin-gonic/gin"
	"github.com/username/project-name/internal/api/controllers"
	"github.com/username/project-name/internal/middlewares"
)

func SetupRoutes(router *gin.Engine) {
	api := router.Group("/api")
	{
		api.POST("/user/signup", controllers.RegisterUser)
		api.POST("/user/login", controllers.LoginUser)
		api.GET("/user/profile", middlewares.CheckAuth, controllers.GetUser)
		api.GET("/user/all", middlewares.CheckAuth, middlewares.CheckAdmin, controllers.GetAllUsers)
	}
}
