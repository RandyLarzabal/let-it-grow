//const articlesService = require("./articles.service");
const Article = require('./articles.model')


const findAll = (req, res) => {
  let sort = {};
  if (req.query.sortDate) {
    sort.creationDate = 1
  }
  Article.find({},{},{sort}, function (err, article) {
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

const find = (req, res) => {
  Article.findOne({_id: req.params.id}, function (err, article) {
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

const remove = (req, res) => {
  Article.deleteOne({_id: req.params.id}, {}, function (err) {
    if (err)
      res.json({
        status: "error",
        message: err
      });
  });
};

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
  find: find,
  remove: remove,
};
