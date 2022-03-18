const express = require('express');
const port = 3000;

const compression = require('compression');
const logger = require('morgan');
const bodyParser = require('body-parser');

const products = require('./routes/products')

const app = express();

app.use(compression());
app.use(logger("dev"));
app.use(bodyParser.json());

app.use('/products', products)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.sendStatus(404); // 404
});
  
// error handler
app.use(function (err, _, res, __) {
    console.error(err); // log forever
    // console.info | warn | log | error
    res.sendStatus(500);
});

app.listen(port, () => console.log(`Example app listening on portttt ${port}!`))