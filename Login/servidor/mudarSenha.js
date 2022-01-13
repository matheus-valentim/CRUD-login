const email = require('./smtp/index')
const pin = Math.floor(1000 + Math.random() * 9000)
const enviarEmail = (req, res) =>{
	email(pin, req.body.email)
	res.redirect('/pin')
}
module.exports = {enviarEmail, pin}