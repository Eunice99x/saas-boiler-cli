import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: '',
    database: "test_db",
  })
  .promise();

const result = await pool.query("SELECT * FROM test_data");
console.log(result);
