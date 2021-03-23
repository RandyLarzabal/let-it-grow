const express = require('express')
const router = require('./server/app.router')

const app = express()
app.use(express.json());
app.use(express.static('./dist/let-it-grow'))
app.use('/api', router)
app.get('/*', ((req, res) =>
    res.sendFile("index.html", {root: 'dist/let-it-grow'})))

app.listen(process.env.PORT || 8000)
