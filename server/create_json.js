const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

require('dotenv').config();

app.use(bodyParser.urlencoded( {extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/Timer', function(req, res, next) {
  console.log(req);
})

app.get('/Redemr', function(req, res, next){
  console.log(req);
})

app.get('/Presale', function(req, res, next) {
  console.log(req);
})

app.get('/TimeLock', function(req, res, next) {
  console.log(req);
})

app.listen(3010, () => {
    console.log("Started Server On Port 3010");
});