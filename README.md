# CRUD-login ![badge](https://img.shields.io/badge/license-MIT-sucess)

> é um projeto de CRUD (Create Read Update Delete) de login feito para estudos.

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Implementação do design (front-end)
- [x] Codificação do registro de usuário
- [x] codificação do login de usuário
- [ ] criação de JWT
- [ ] Proteger de SQL injection
- [ ] Criação da função de update
- [ ] Criação da função de deletar conta
- [ ] Criação da função de redefinir/recuperar a senha

## 💻 Dependências

`bcrypt: 5.0.1`
<br>
`express: 4.17.1`
<br>
`express-session: 1.17.2`
<br>
`mysql2: 2.3.3`
<br>
`nodemon: 2.0.15`

## ☕ Usando CRUD-login

Para usar CRUD-login, siga estas etapas:

1. Vá até "CRUD-login/Login/servidor/DB.js".
2. Mude a senha e o usuário para o da sua database (nesse projeto é usado o MySQL como banco de dados).
3. O nome da tabela é nodelogin, sua table se chama accounts e seus campos são: ID, username, password e email.
4. baixe as dependências com o comando "npm install".
5. Agora só dar "npm start" que o projeto irá rodar no localhost na porta 3000.

## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](https://github.com/matheus-valentim/CRUD-login/blob/main/LICENSE) para mais detalhes.

[⬆ Voltar ao topo](#CRUD-login)<br>
