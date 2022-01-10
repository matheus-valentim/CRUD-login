var mysql = require('mysql2')

var connection = mysql.createConnection({
	host     : 'localhost', 
	user     : 'root',
	password : 'ROOT',
	database : 'nodelogin'
})



module.exports = connection