var express = require('express');
var app = express();
require('./src/render.js')(app);

var QuestionSet = require('./src/QuestionSet.js')

// Set up Environment
app.set('port', (process.env.PORT || 5000));
app.set('views', 'src/views');
app.set('view engine', 'jsx');
app.use(express.static('static'));

// This route amounts to our minimal controller
app.get('/', function (req, res) {
  res.locals.questions = new QuestionSet().select(10).noanswers.array;

  res.render('index');
});

// Start the app
module.exports = app.listen(app.get('port'));
