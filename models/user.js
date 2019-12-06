const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      passportLocalMongoose = require('passport-local-mongoose')
      
const userSchema = new Schema({
    username: {
        required: true,
        unique: true,
        type: String,
    }
}, { timestamps: true })

userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', userSchema)
