var router = require('express').Router();

var QuestionSet = require('../model/Quiz.js')

router.get('/', function(req, res) {
  res.locals.questions = new QuestionSet().select(10).noanswers.array;

  res.render('Quiz');
});

module.exports = router;
