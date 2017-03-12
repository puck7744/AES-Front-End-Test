var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
require('./src/util/template.js')(app);

// Set up Environment
app.set('port', (process.env.PORT || 5000));
app.set('views', 'src/view');
app.set('view engine', 'jsx');

app.use(express.static('static'));
app.use(bodyParser.json());
app.use(session({
  secret: 'E63D-7561-FA47-BF35',
  resave: false,
  saveUninitialized: true
}));

// Routing
app.get('/', function (req, res) {
  res.redirect(301, '/quiz/');
});

app.use('/quiz/', require('./src/controller/Quiz.js'));

// Start the app
module.exports = app.listen(app.get('port'));
