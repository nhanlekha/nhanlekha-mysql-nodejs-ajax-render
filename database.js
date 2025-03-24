// database.js (MySQL version)

const mysql = require("mysql2");

// Tạo pool kết nối cho MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST, 
  user: process.env.DB_USERNAME, 
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,  
  port: process.env.PORT,           
  connectionLimit: 10
});

// Kiểm tra kết nối
pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log("Connected to MySQL!");
  connection.release();
});

module.exports = pool;
