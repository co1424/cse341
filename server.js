const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const env = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

const swaggerAutogen = require('swagger-autogen')();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(cors());
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', require('./routes/contacts.js'));


/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT || 3000;
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