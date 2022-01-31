var bcrypt = require('bcrypt')
const connection = require('./DB')
const express = require('express')

const login = async (req, res, app) =>{
	var username = req.body.senha.trim()
	let password = req.body.usuario.trim()
	if (username && password) {
			checkUser(username, password, req, res, app)
	} else {
		res.redirect('/')
	}
}
async function checkUser(username, password, req, res, app) {
	connection.query(`SELECT * FROM accounts WHERE username = ?`, [username], function(error, results, fields) {
		if (results.length > 0){
			if(results[0].password && results[0].username){
				const match =  bcrypt.compareSync(password, results[0].password)
				if(match) {
					console.log('certo')
				req.session.loggedin = true
				req.session.username = username
				res.redirect('/sucesso') 
				}else {
					res.status(400).json({mensagem: 'usuário ou senha incorretos'})
				}
			}
			else{
				res.status(500).json({mensagem: 'erro do servidor'})
			}
		}
		else{
			res.status(400).json({mensagem:'Usuário ou senha incorretos'})
		}
	})
}

function handleError(error) {
express().post('/auth', async function(req, res) {
		console.log(certo)
		res.json(error)
	})
}
module.exports = login