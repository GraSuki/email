const nodemailer = require('nodemailer');
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "lethanhtien.official@gmail.com",
        pass: "apavxhwqlyemakmp"
    }
});

app.post("/webhooks", async (req, res) => {
    const { body } = req;
    console.log(body)
    let mailOptions = {
        from: "lethanhtien.official@gmail.com",
        to: "lethanhtien.official@gmail.com",
        subject: 'Sending Email using Node.js',
        text: "Hello"
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            res.status(200).json("Success!");
        }
    })
});

app.listen(3000);
