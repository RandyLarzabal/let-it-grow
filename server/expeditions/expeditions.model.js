//Article Model
let mongoose = require('mongoose')

//Schema Model

let expeditionSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  subtitles: {
    required: true,
    type: String,
  },
  images: {
    type: Array,
    required: true
  }
})

//Export Article Model
let Expedition = module.exports = mongoose.model("expedition", expeditionSchema)

/*module.exports.get = function (callback, limit) {
  Article.find(callback).limit(limit)
}

 */
