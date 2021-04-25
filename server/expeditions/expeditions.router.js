const express = require('express');
const router = express.Router();

router.get('/', ((req, res) => {
  res.send('toute les expeditions')
}));

router.get('/:id', ((req, res) => {
  res.send('je veux cet  experditions ' + req.params.id)
}));

router.delete('/:id', ((req, res) => {
  res.send('je veux supp cette experditions ' + req.params.id)
}));

router.put("/",(((req, res) => {
  res.send("j'ajoute cette expedition")
})))


module.exports = router;
