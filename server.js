const express = require('express')
const router = require('./server/app.router')
//import mongoose
let mongoose = require('mongoose');

const app = express()
app.use(express.json());
app.use(express.static('./dist/let-it-grow'))
app.use('/api', router)
app.get('/*', ((req, res) =>
    res.sendFile("index.html", {root: 'dist/let-it-grow'})))

app.listen(process.env.PORT || 8000)

//connect to mongoose
const dbPath = 'mongodb://localhost/test';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
  console.log('connected');
}, error => {
  console.log(error, 'error');
})
