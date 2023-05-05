const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const env = require('dotenv').config();
const mongoose = require('mongoose');

app.use(bodyParser.json());

app.use('/', require('./routes/contacts.js'));

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT;
const host = process.env.HOST;
const mongdb = process.env.MONGO_URI;



//  Testing Server


app.get('/', (req, res) => {
  res.send('Hello World!!');
});


//  Connect to mongoDB
mongoose.connect(mongdb, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log('MongoDB Connected successfully');
    app.listen(port, () => {
      console.log(`App listening on ${host}:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });