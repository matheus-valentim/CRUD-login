var mysql = require('mysql2')
require('dotenv').config()

var connection = mysql.createConnection({
	host     : process.env.HOSTSQL,
	user     : process.env.USERSQL,
	password : process.env.PASSSQL,
	database : process.env.DATABASE
})

module.exports = connection