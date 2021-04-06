const express = require('express');
const articleController = require('./articles.controller');
const router = express.Router();

router.get('/', ((req, res) => {
  articleController.findAll(req, res)
}));

router.put('/', ((req, res) => {
  articleController.addOne(req, res)
}));

router.get('/:id', ((req, res) => {
  res.send('je veux cet  article ' + req.params.id)
}));

module.exports = router;
