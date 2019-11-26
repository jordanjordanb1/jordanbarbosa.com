const mongoose = require('mongoose'),
      Schema = mongoose.Schema
      
const projectSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    github: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    tech: [String],
    isHeroku: Boolean
})

const Projects = mongoose.model('Project', projectSchema)
module.exports = Projects
