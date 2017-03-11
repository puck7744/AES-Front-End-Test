var express = require('express');
var app = express();
require('./src/render.js')(app);

// Set up Environment
app.set('port', (process.env.PORT || 5000));
app.set('views', 'src/views');
app.set('view engine', 'jsx');

app.get('/', function (req, res) {
  res.render('index');
});

// Start the app
module.exports = app.listen(app.get('port'));
