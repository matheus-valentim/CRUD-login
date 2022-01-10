var express = require('express')
var session = require('express-session')
var bodyParser = require('body-parser')
var path = require('path')
let registro = require('./servidor/registro')
let login = require('./servidor/login')
const connection = require('./servidor/DB')

var app = express()
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}))

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

// envio de html
app.get('/', async function(req, res) {
	res.sendFile(path.join(__dirname + '/html/login.html'))
});
app.get('/registro', async (req, res)=> {
	res.sendFile(__dirname + '/html/registro.html')
})
app.get('/falha', async (req, res)=> {
	res.sendFile(__dirname + '/html/falha.html')
})
app.get('/sucesso', async function(req, res) {
	if (req.session.loggedin) {
		res.sendFile(__dirname + '/html/sucesso.html')
	} else {
		res.sendFile(__dirname + '/html/falha.html')
	}
})

// pegar informações do front-end
app.post('/auth', async function(req, res) {
	login(req, res)
})

//registro de usuário
app.post('/regis', (req, res)=> {
	registro(req, res)
})
app.post('/deletar', (req, res) =>{
	console.log(req.body)
	res.end()
	connection.query(`DELETE FROM accounts WHERE username = '${req.session.username}'`, ()=>{
	})
})
//levanta o servidor
app.listen(3000 , () => console.log('aberto na porta 3000'))