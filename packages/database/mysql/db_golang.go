package main

import (
    "database/sql"
    "fmt"

    _ "github.com/go-sql-driver/mysql"
)

func main(){
    db, err := sql.Open("mysql", "root@tcp(localhost:3306)/test_db")
    if err != nil {
        fmt.Println("error validating sql.Open arguments")
        panic(err.Error())
    }
    defer db.Close()

    err = db.Ping()
    if err != nil {
        panic(err.Error())
    }

    selectAll, err := db.Query("SELECT * FROM test_data")
    if err != nil {
        panic(err.Error())
    }
    defer selectAll.Close()

    var id int
    var title string

    fmt.Println("results:")
    for selectAll.Next() {
        err := selectAll.Scan(&id, &title)
        if err != nil {
            panic(err.Error())
        }
        fmt.Printf("ID: %d, title: %s\n", id, title)
    }

    if err = selectAll.Err(); err != nil {
        panic(err.Error())
    }

}