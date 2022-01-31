require('dotenv').config()
  const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.HOSTSMTP,
  port: process.env.PORTSMTP,
  secure: false,
  auth: {
    user: process.env.USERSMTP,
    pass: process.env.PASSSMTP,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function run(pin, email) {
  const mailSent = await transporter.sendMail({
    subject: "Mudança de senha",
    from: "sistema de login",
    to: `${email}`,
    html: `
    <html>
    <body>
        <p>Pin de mudança de senha:
      <strong>${pin}</strong></p></br>
    </body>
  </html> 
    `,
  });
  console.log(mailSent);
}
module.exports = run