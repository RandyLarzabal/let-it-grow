//Article Model
let mongoose = require('mongoose')

//Schema Model

let articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
})

//Export Article Model
let Article = module.exports = mongoose.model("article", articleSchema)
module.exports.get = function (callback, limit) {
  Article.find(callback).limit(limit)
}
