// database.js (MySQL version)
const mysql = require("mysql2");

// Tạo pool kết nối cho MySQL
const pool = mysql.createPool({
  host: "localhost",          // hoặc host của MySQL server
  user: "root",       // thay bằng tên user của bạn
  password: "",   // thay bằng mật khẩu
  database: "testdatabase",   // tên database
  port: 3306,                 // cổng mặc định của MySQL
  connectionLimit: 10
});

// Kiểm tra kết nối
pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log("Connected to MySQL!");
  connection.release();
});

module.exports = pool;
