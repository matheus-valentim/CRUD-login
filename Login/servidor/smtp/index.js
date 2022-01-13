const config = {
    host: "smtp.gmail.com",
    port: 587,
    user: "matheusfigueiredo8016@gmail.com",
    pass: "Abc,1234!",
  };

  const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: config.host,
  port: config.port,
  secure: false,
  auth: {
    user: config.user,
    pass: config.pass,
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