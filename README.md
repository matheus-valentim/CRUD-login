# CRUD-login ![badge](https://img.shields.io/badge/license-MIT-sucess)

> é um projeto de CRUD (Create Read Update Delete) de login feito para estudos.

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Implementação do design (front-end)
- [x] Codificação do registro de usuário
- [x] Codificação do login de usuário
- [x] Criação da função de deletar conta
- [x] Criação da função de redefinir/recuperar a senha
- [x] Validação de formulários
- [ ] Regras de negócio para o login
- [ ] Implementação do responsivo
- [ ] Criação da função de update
- [ ] Usar o padrão MVC e organizar o código
- [ ] Multiplas sessões no express session

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
<br>
`nodemailer: 6.7.2`
<br>
`dotenv: 14.3.2`

## ☕ Usando CRUD-login

Para usar CRUD-login, siga estas etapas:

1. Crie um arquivo chamado ".env"
2. dentro dele é preciso preencher algumas variáveis que são:<br><br>
  `HOSTSMTP` = O nome do host do seu serviço de email usado para o envio de email de recuperaração de senha (se for o google seria "smtp.gmail.com" por exemplo)<br>
  `PORTSMTP` = O numero da porta que o nodemailer vai usar para envio de emails (a padrão é a 587)<br>
  `USERSMTP` = O nome do seu email (exemplo@gmail.com)<br>
  `PASSSMTP` = A senha do seu email<br>
  `HOSTSSQL` = O host do seu banco de dados (provavelmente será localhost)<br>
  `DATABASE` = O nome do banco de dados que é "nodelogin"<br>
  `USERSQL` = O nome do usuário do banco de dados <br>
  `PASSSQL` = A senha do seu banco de dados<br><br>
4. O nome da tabela é nodelogin, sua table se chama accounts e seus campos são: ID, username, password e email.
7. Baixe as dependências com o comando "npm install".
8. Agora só dar "npm start" que o projeto irá rodar no localhost na porta 3000.

## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](https://github.com/matheus-valentim/CRUD-login/blob/main/LICENSE) para mais detalhes.

[⬆ Voltar ao topo](#CRUD-login)<br>
