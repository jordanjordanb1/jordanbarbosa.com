'use strict'

const express = require('express'),
      mailRouter = express.Router(),
      nodemailer = require('nodemailer')

function main(values) {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'oauth2',
            user: 'jordansbarbosa01@gmail.com',
            clientId: process.env.GMAIL_ID,
            clientSecret: process.env.GMAIL_SECRET,
            refreshToken: process.env.GMAIL_REFRESH_TOKEN
        }
    });

    const valuesObj = JSON.parse(values) // Creates a Javascript Object from JSON

    return transport.sendMail({
        from: 'jrodansbarbosa01@gmail.com',
        to: 'jordanbarbosa01@gmail.com',
        replyTo:  valuesObj.email,
        subject: 'Contact form from Jordanbarbosa.com',
        text: `Message from: ${valuesObj.name}.\nReply email: ${valuesObj.email}.\nMessage: ${valuesObj.message}`
    }, (err, info) => {
        if (err) {
            console.log(err)
        } else {
            console.log(info)
        }
    })
}

// MAIL ROUTER
mailRouter.route('/')
    .get((req, res) => {
        res.statusCode = 404 
    })
    .post((req, res, next) => {
        const values = req.body.formData

        main(values).catch(err => next(err)) // Sends email

        res.statusCode = 200,
        res.setHeader('Content-Type', 'application/json')
        res.json({
            success: true
        })
    })
    .put((req, res) => {
        res.statusCode = 404
    })
    .delete(res => {
        res.statusCode = 404
    })

module.exports = mailRouter