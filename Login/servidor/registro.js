var bcrypt = require('bcrypt')
const connection = require('./DB')

const registro = async = (req, res) =>{
    let username = req.body.usuario
    let password = req.body.senha
    let email = req.body.email
    if (username && password){
        bcrypt.genSalt().then( salt =>{
            bcrypt.hash(password, salt).then(hash =>{
                connection.query(`INSERT INTO accounts(username, password, email) VALUES ("${username}", "${hash}", "${email}")`, ()=>{
                    res.redirect('/')
                })
            })
        });
    }
}
module.exports = registro
