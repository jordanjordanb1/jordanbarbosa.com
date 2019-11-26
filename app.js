const express = require('express'),
      path = require('path'),
      logger = require('morgan'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      __CONFIG__ = require('./config'),

const indexRouter = require('./routes/index'),
      mailRouter = require('./routes/mail'),
      projectsRouter = require('./routes/projects')

const app = express();

// Connecting to server
if (process.env.PROD) {
    console.log("Trying to connect to production DB...")
    mongoose.connect(__CONFIG__.mongoProdUrl, {useNewUrlParser: true, useUnifiedTopology: true}).then(db => console.log('Connected to MongoDB...')).catch(err => console.error(err))
} else {
    console.log("Trying to connect to development DB...")
    mongoose.connect(__CONFIG__.mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true}).then(db => console.log('Connected to MongoDB...')).catch(err => console.error(err))
}

// CORS setup
if (process.env.PROD)
    app.use(cors({ origin: 'https://jordanbarbosa.com' }))
else
    app.use(cors({ origin: 'http://localhost:3000' }));


// Enables logger in development mode
if (!process.env.PROD)
    app.use(logger('dev'));

// Body parser setup
app.use(express.json({limit: '12mb'}))
app.use(express.urlencoded({limit: '12mb', extended: true }))

// Static path
app.use(express.static(path.join(__dirname, 'public')));


/* Routes  */
app.use('/', indexRouter);
app.use('/mail', mailRouter)
app.use('/projects', projectsRouter)

module.exports = app;
