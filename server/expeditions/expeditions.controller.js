//const articlesService = require("./articles.service");
const Expedition = require('./expeditions.model')


const findAll = (req, res) => {
  Expedition.find(function (err, expedition) {
    if (err)
      res.json({
        status: "error",
        message: err
      });
    res.json({
      status: "success",
      message: "Got Bio Successfully!",
      data: expedition
    });
  });
};

const find = (req, res) => {
  Expedition.findOne({_id: req.params.id}, function (err, expedition) {
    if (err)
      res.json({
        status: "error",
        message: err
      });
    res.json({
      status: "success",
      message: "Got Bio Successfully!",
      data: expedition
    });
  });
};

const remove = (req, res) => {
  Expedition.deleteOne({_id: req.params.id}, {},function (err) {
    if (err)
      res.json({
        status: "error",
        message: err
      });
  });
};

const addOne = function (req, res) {
  let expedition = new Expedition();
  expedition.title = req.body.title;
  expedition.description = req.body.description;
//Save and check error
  expedition.save(function (err) {
    if (err)
      res.json(err);
    res.json({
      message: "New Article Added!",
      data: expedition
    });
  });
};


module.exports = {
  findAll: findAll,
  addOne: addOne,
  find: find,
  remove: remove,
};
