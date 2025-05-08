const cron = require("node-cron");
const axios = require("axios");

// Hàm gọi API
async function fetchData() {
    try {
      const response = await axios.post("https://nhanlekha-mysql-nodejs-ajax-render.onrender.com/sample_data/action", { action: 'fetch' });
      console.log("Dữ liệu nhận được:", response.data);
    } catch (error) {
      console.error("Lỗi khi gọi API:", error.message);
    }

    try {
      const response2 = await axios.get("https://nhan-n8n.onrender.com");
      console.log("Dữ liệu nhận được từ n8n");
    } catch (error) {
      console.error("Lỗi khi gọi API:", error.message);
    }

  }
  
  // Lên lịch chạy mỗi 10 giây
  cron.schedule("*/10 * * * * *", () => {
    console.log("Cron job: Đang gọi API...");
    fetchData();
  });
  
  console.log("Cron job đã được khởi tạo và sẽ gọi API mỗi 10 giây.");