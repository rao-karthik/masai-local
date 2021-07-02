const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false,
    auth: {
      user: '316f57f1e7207e', 
      pass: '9f197e4644dee2', 
    },
    tls: {
        rejectUnauthorized: false
    }
});

module.exports = transporter;