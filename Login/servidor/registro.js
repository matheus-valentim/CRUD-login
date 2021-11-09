var bcrypt = require('bcrypt')
const connection = require('./DB')

const registro = async = (req, res) =>{
    let username = req.body.usuario
    let password = req.body.senha
    let email = req.body.email
    console.log(username, password, email)
    if (username && password){
        console.log(password)
        bcrypt.genSalt().then( salt =>{
            bcrypt.hash(password, salt).then(hash =>{
                console.log(salt)
                console.log(hash)
                connection.query(`INSERT INTO accounts(username, password, email) VALUES ("${username}", "${hash}", "${email}")`, ()=>{
                    res.redirect('/')
                })
            })
        });
    }
}
module.exports = registro