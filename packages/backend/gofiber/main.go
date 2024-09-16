package main

import "github.com/gofiber/fiber/v2"

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		c.Status(200).JSON("Hello, im eunice99x")
		return nil
	})

	app.Listen(":3333")
}
