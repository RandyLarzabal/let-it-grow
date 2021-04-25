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
  articleController.find(req,res)
}))

router.delete('/:id',(((req, res) => {
  articleController.remove(req,res)
})))


module.exports = router;
