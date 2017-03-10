var express = require('express');
var app = express();

// Set up Express
app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.status(200).send('ok');
});

// Start the app
module.exports = app.listen(app.get('port'));
