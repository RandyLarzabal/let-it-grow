const express = require('express');
const router = express.Router();
const experditionController = require('./expeditions.controller');
router.get('/', ((req, res) => {
  experditionController.findAll(req, res)
}));

router.get('/:id', ((req, res) => {
  experditionController.find(req, res)
}));

router.delete('/:id', ((req, res) => {
  experditionController.remove(req, res)
}));

router.put("/", (((req, res) => {
  experditionController.addOne(req, res)
})))


module.exports = router;
