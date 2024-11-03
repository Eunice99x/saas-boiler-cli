package models

import "time"

type User struct {
	ID        uint   `json:"id" gorm:"primary_key"`
	Username  string `json:"username"`
	Email     string `json:"email" gorm:"unique"`
	Password  string `json:"password"`
	Role      string `json:"role" gorm:"default:user"`
	CreatedAt time.Time
}
