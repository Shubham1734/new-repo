const nodemailer = require('nodemailer');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const emailTransporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'govindjakate@gmail.com',
    pass: 'Password@0208google', // Your Gmail password or an App Password
  }
});

const emailOptions = {
  from: 'govindjakate@gmail.com',
  to: 'govindjakate10th@example.com',
  subject: 'Subject of the email',
  text: 'Body of the email',
};

rl.question('Enter your Gmail password or App Password: ', (password) => {
  emailTransporter.sendMail(emailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email: ' + error);
    } else {
      console.log('Email sent: ' + info.response);
    }
    
    rl.close();
  });
});
