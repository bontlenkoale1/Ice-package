const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587, 
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER,  
    pass: process.env.EMAIL_PASS,  

  },
});

app.post('/api/send-message', (req, res) => {
  const { name, email, message } = req.body;

  
  const mailOptions = {
    from: email, 
    to: 'bontlenkoale21@gmail.com',
    subject: `New Message from ${name}`, 
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, 
  };

  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);  
      return res.status(500).json({ error: 'Failed to send message' });
    }
    res.status(200).json({ message: 'Message sent successfully' });  
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
