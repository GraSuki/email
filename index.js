const nodemailer = require('nodemailer');
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/webhooks", async (req, res) => {

    const { body } = req;
    console.log(body)
    res.status(200).json("Success!");

});

app.listen(3000);