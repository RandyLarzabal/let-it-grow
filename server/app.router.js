const express = require('express')
const authRouter = require('./auth/auth.router');
const articlesRouter = require('./articles/articles.router');
const expeditionsRouter = require('./expeditions/expeditions.router');

const router = express.Router()

router.use('/auth', authRouter);
router.use('/articles', articlesRouter);
router.use('/expeditions', expeditionsRouter);

module.exports = router
