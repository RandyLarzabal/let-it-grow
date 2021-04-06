//const articlesService = require("./articles.service");
const Article = require('./articles.model')

//For index
const findAll = (req, res) => {
  Article.get(function (err, article) {
    if (err)
      res.json({
        status: "error",
        message: err
      });
    res.json({
      status: "success",
      message: "Got Bio Successfully!",
      data: article
    });
  });
};

//For creating new bio
const addOne = function (req, res) {
  let article = new Article();
  article.title = req.body.title;
  article.description = req.body.description;
//Save and check error
  article.save(function (err) {
    if (err)
      res.json(err);
    res.json({
      message: "New Article Added!",
      data: article
    });
  });
};


module.exports = {
  findAll: findAll,
  addOne: addOne,
};
