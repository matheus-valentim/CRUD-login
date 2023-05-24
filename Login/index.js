const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const path = require('path')
let registro = require('./servidor/registro')
let login = require('./servidor/login')
const connection = require('./servidor/DB')
const mudarSenha = require('./servidor/mudarSenha')
var bcrypt = require('bcrypt')

var app = express()

app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: false,
}))

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

// envio de html
app.get('/', async function(req, res) {
	res.sendFile(path.join(__dirname + '/html/login.html'))
})
app.get('/registro', async (req, res)=> {
	res.sendFile(__dirname + '/html/registro.html')
})
app.get('/falha', async (req, res)=> {
	res.sendFile(__dirname + '/html/falha.html')
})
app.get('/recuperar', async (req, res)=> {
	res.sendFile(__dirname + '/html/recuperar.html')
})
app.get('/pin', async (req, res)=> {
	res.sendFile(__dirname + '/html/pin.html')
})
app.get('/user', (req, res)=> {
	res.json(req.session.username)
})
app.get('/sucesso', async function(req, res) {
	if (req.session.loggedin) {
		res.sendFile(__dirname + '/html/sucesso.html')
	} else {
		res.sendFile(__dirname + '/html/falha.html')
	}
})
app.get("/senha", async function(req, res) {
	if (req.session.loggedin) {
		res.sendFile(__dirname + '/html/senha.html')
	} else {
		res.sendFile(__dirname + '/html/falha.html')}})

// pegar informações do front-end
app.post('/auth', async function(req, res) {
	login(req, res, app)
})

app.post('/pin', (req, res) => {
	const senha = req.body.pin1 + req.body.pin2 + req.body.pin3 + req.body.pin4
	const username = req.body.username
	console.log(mudarSenha.pin, senha)
	if(senha == mudarSenha.pin){
		console.log('tudo certo')
		req.session.loggedin = true
		req.session.username = username
		res.redirect('/senha')
	}else{
		res.status(400).json({mensagem: 'Pin incorreto'})
	}
})
//registro de usuário
app.post('/regis', (req, res)=> {
	registro(req, res)
})
app.post('/recSenha', (req, res)=> {
	console.log(req.session, req.body.username)
	bcrypt.genSalt().then( salt =>{
		bcrypt.hash(req.body.senha, salt).then(hash =>{
			connection.query(`UPDATE accounts SET password='${hash}' WHERE username= '${req.body.username}';`, ()=>{
				res.redirect('/')
			})
		})
	})
})
app.post('/rec', (req, res)=> {
	mudarSenha.enviarEmail(req, res)
	console.log(mudarSenha.pin)
})

//deleta a conta do usuário
app.post('/deletar', (req, res) =>{
	console.log(req.body)
	res.end()
	connection.query(`DELETE FROM accounts WHERE username = '${req.session.username}'`, ()=>{
	})
})
//levanta o servidor
app.listen(3000 , () => console.log('aberto na porta 3000'))