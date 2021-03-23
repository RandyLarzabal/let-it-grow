const express = require('express');
const router = express.Router();

router.get('/', ((req, res) => {
  res.send('toute les expeditions')
}));

router.get('/:id', ((req, res) => {
  res.send('je veux cet  experditions ' + req.params.id)
}));


module.exports = router;
