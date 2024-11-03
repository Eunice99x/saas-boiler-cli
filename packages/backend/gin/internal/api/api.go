package api

import (
	"github.com/gin-gonic/gin"
	"github.com/username/project-name/internal/api/controllers"
	"github.com/username/project-name/internal/middlewares"
)

func SetupRoutes(router *gin.Engine) {
	api := router.Group("/api")
	{
		api.GET("/user/profile", middlewares.CheckAuth, controllers.GetUser)
		api.GET("/user/all", middlewares.CheckAuth, middlewares.CheckAdmin, controllers.GetAllUsers)
		api.POST("/user/signup", controllers.RegisterUser)
		api.POST("/user/login", controllers.LoginUser)
		api.PUT("/user/profile/:id", middlewares.CheckAuth, controllers.UpdateUser)
		api.DELETE("/user/profile/:id", middlewares.CheckAuth, middlewares.CheckAdmin, controllers.DeleteUser)
	}
}
