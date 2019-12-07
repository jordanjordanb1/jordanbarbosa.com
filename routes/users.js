'use strict'

const express = require('express'),
      usersRouter = express.Router(),
      passport = require('passport'),
      auth = require('../middleware/authenticate'),
      User = require('../models/user')

usersRouter.post('/register', async (req, res, next) => {
        if (process.env.PROD) { // Checks to see if in production
            res.statusCode = 404 // Return a 404 if true
        } else {
            const { username, password } = req.body

            await User.register(new User({ username }), password, (err, user) => { // Registers a new user with provided credentials
                if (err) {
                    return res.status('500').json({ success: false, msg: err.message }) // If there's an error, return to client
                } else {
                    passport.authenticate('local')(req, res, () => { // Checks with passport-mongoose if user exits
                        const { _id } = user,
                              token = auth.getToken(_id) // Gets a new JWT Token

                        res.status('200').setHeader('Authorization', `Bearer ${token}`) // Sets token in bearer
                        res.send({ success: true, msg: 'Registered user succesfully!', token })
                    })
                }
            })
        }
    })

usersRouter.post('/login', (req, res, next) => {
    try {
        auth.verifyUser(req, res, next) // Verifies if user exists
    } catch(e) {
        next(e)
    }
})

module.exports = usersRouter
