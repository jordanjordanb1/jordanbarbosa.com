/* Sets MongoDB username & password from env variable or empty sttring if the variable isn't set */
const mongodb_user = process.env.MONGOUSER || '',
      mongodb_pass = process.env.MONGOPASS || '',
      secret = process.env.SECRET || ''

module.exports = {
    mongoUrl: 'mongodb://localhost:27017/jordanbarbosa',
    mongoProdUrl: `mongodb://${mongodb_user}:${mongodb_pass}@ds159129.mlab.com:59129/heroku_c5687gfk`,
    secret
}
