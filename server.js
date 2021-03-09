const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('./dist/truc'))

app.get('/*', ((req, res) =>

  res.sendFile("index.html", {root: 'dist/truc'})))


app.listen(process.env.PORT || 8000)
