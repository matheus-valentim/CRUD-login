var bcrypt = require('bcrypt')
const connection = require('./DB')
const secret = 'Esse_é_o_secret_mais_secreto_de-todos_100_por_cento_confirmado.'
const jwt = require("jsonwebtoken")

const login = async (req, res) =>{
	let username = req.body.senha
	let password = req.body.usuario
	console.log(username)
	if (username && password) {
			checkUser(username, password, req, res)
	} else {
		res.send('Please enter Username and Password!')
	}
}

async function checkUser(username, password, req, res) {
	connection.query(`SELECT * FROM accounts WHERE username = ?`, [username], function(error, results, fields) {
		if (results.length > 0){
			if(results[0].password && results[0].password){
				const match =  bcrypt.compareSync(password, results[0].password)
				if(match) {
				req.session.loggedin = true
				req.session.username = username
				const token = jwt.sign({id: results[0].id}, secret, {expiresIn: 300})
				res.redirect('/sucesso') 
				}else {
					res.redirect('/')
				}
			}
			else{
				res.redirect('/regis')
			}
		}
		else{
			res.redirect('/')
		}
	})
}
module.exports = login