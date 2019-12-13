'use strict'

const express = require('express'),
      projectsRouter = express.Router(),
      Projects = require('../models/projects'),
      multer = require('multer'),
      upload = multer({ dest: 'public/static/media/projects1'}) // Remove 1 before pushing to heroku

projectsRouter.get('/', (req, res, next) => {
        Projects.find({}) // Gets all projects from Mongo
            .then(projects => {
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.json(projects)
            }, err => next(err))
            .catch(err => next(err))
    })

projectsRouter.post('/', upload.single('img'), (req, res, next) => {
    console.log(req.body)
})

module.exports = projectsRouter
