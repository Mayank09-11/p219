const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3030;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});

function sendReminderEmail(to, subject, text) {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: to,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
}

app.get('/', (req, res) => {
  res.send('Mailer is running');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  

  sendReminderEmail('recipient@example.com', 'Payment Reminder', 'This is a reminder to make your payment.');
});

  