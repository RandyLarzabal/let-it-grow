const express = require('express')
//import mongoose
let mongoose = require('mongoose');

const router = require('./server/app.router')
const loggerMiddleware = require('./server/common/logger.middleware');
const errorMiddleware = require('./server/common/error/error.middleware');

const app = express()

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(express.json());
app.use(express.static('./dist/let-it-grow'))
app.use(loggerMiddleware);
app.use('/api', router)
app.get('/*', ((req, res) =>
    res.sendFile("index.html", {root: 'dist/let-it-grow'})))
app.use(errorMiddleware);
app.listen(process.env.PORT || 8000)

//connect to mongoose
const dbPath = "mongodb+srv://Randy:letitGrow@cluster0.3b56s.mongodb.net/letitgrow?retryWrites=true&w=majority";
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
  console.log('connected');
}, error => {
  console.log(error, 'error');
})
