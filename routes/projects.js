'use strict'

const express = require('express'),
      projectsRouter = express.Router(),
      Projects = require('../models/projects')

projectsRouter.route('/')
    .get((req, res, next) => {
        Projects.find({}) // Gets all projects from Mongo
            .then(projects => {
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.json(projects)
            }, err => next(err))
            .catch(err => next(err))
    })
    .post((req, res) => {
        res.statusCode = 404 
    })
    .put((req, res) => {
        res.statusCode = 404 
    })
    .delete((req, res) => {
        res.statusCode = 404 
    })

module.exports = projectsRouter
