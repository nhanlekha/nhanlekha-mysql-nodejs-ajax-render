// database.js (MySQL version)

const mysql = require("mysql2");

// Tạo pool kết nối cho MySQL
const pool = mysql.createPool({
  host: "bkbstr3e5egx0xkb0x9n-mysql.services.clever-cloud.com", 
  user: "ujrk19spwplso5ot", 
  password: "zgxpCN9luoW6gluFWXjN",
  database: "bkbstr3e5egx0xkb0x9n",  
  port: 3306,           
  connectionLimit: 10
});

// Kiểm tra kết nối
pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log("Connected to MySQL!");
  connection.release();
});

module.exports = pool;
