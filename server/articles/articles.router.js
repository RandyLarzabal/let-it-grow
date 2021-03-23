const express = require('express');
const router = express.Router();

router.get('/', ((req, res) => {
  res.send('tout les articles')
}));

router.get('/:id', ((req, res) => {
  res.send('je veux cet  article ' + req.params.id)
}));

module.exports = router;
