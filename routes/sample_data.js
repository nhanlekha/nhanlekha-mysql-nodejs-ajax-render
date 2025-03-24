var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function (request, response, next) {

	response.render('sample_data', {
		title: 'Node JS PostgreSQL Ajax Application'
	});

});


router.post("/action", function (request, response, next) {

	var action = request.body.action;

	console.log(action);

	if(action == 'fetch')
	{

			var query = 'SELECT * FROM sample_data ORDER BY id ASC';

			database.query(query, function (error, data) {
				if (error) {
					console.error("Lỗi khi truy vấn cơ sở dữ liệu:", error);
					response.status(500).json({
						error: "Lỗi máy chủ"
					});
				} else {
					console.log(data); // data là mảng các dòng
					response.json({
						data: data
					});
				}
			});
			

	
	}


	if (action == 'Add') {
		var first_name = request.body.first_name;
		var last_name = request.body.last_name;
		var age = request.body.age;
		var gender = request.body.gender;

		var query = "INSERT INTO sample_data (first_name, last_name, age, gender) VALUES (?, ?, ?, ?)";
		database.query(query, [first_name, last_name, age, gender], function (error, data) {
			if (error) throw error;
			response.json({
				message: 'Data Added'
			});
		});



	}

	if (action == 'fetch_single') {
		var id = request.body.id;

		var query = `SELECT * FROM sample_data WHERE id = '${id}'`;

		database.query(query, function (error, data) {
			console.log(data); 
			response.json(data);

		});
	}

	if (action == 'Edit') {
		var id = request.body.id;

		console.log('ID'+ id);

		var first_name = request.body.first_name;
		var last_name = request.body.last_name;
		var age = request.body.age;
		var gender = request.body.gender;

		console.log('first_name'+ first_name);


		var query = "UPDATE sample_data SET first_name = ?, last_name = ?, age = ?, gender = ? WHERE id = ?";
		database.query(query, [first_name, last_name, age, gender, id], function (error, data) {
			if (error) {
				console.error("Lỗi khi cập nhật cơ sở dữ liệu:", error.message);
				response.status(500).json({
					error: "Lỗi máy chủ: Không thể cập nhật dữ liệu"
				});
			} else {
				response.json({
					message: 'Dữ liệu đã được cập nhật thành công'
				});
			}
		});
		

	}

	if (action == 'delete') {
		var id = request.body.id;

		var query = `DELETE FROM sample_data WHERE id = '${id}'`;

		database.query(query, function (error, data) {

			response.json({
				message: 'Data Deleted'
			});

		});
	}


	// if (action == 'search') {
	// 	var searchValue = request.body.searchValue;
	// 	var query = `SELECT * FROM sample_data WHERE column_name ILIKE '%${searchValue}%'`;

	// 	database.query(query, function (error, data) {
	// 		response.json({
	// 			data: data.rows
	// 		});
	// 	});
	// }

});

module.exports = router;