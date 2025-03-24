// database.js (MySQL version)
require('dotenv').config();

const mysql = require("mysql2");

// Tạo pool kết nối cho MySQL
const pool = mysql.createPool({
  host: process.env.MYSQL_ADDON_HOST, 
  user: process.env.MYSQL_ADDON_USER, 
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,  
  port: process.env.MYSQL_ADDON_PORT || 3306,
  connectionLimit: 10
});

// Kiểm tra kết nối
pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log("Connected to MySQL!");
  connection.release();
});

module.exports = pool;
