var router = require('express').Router();

var QuestionSet = require('../model/Quiz.js')

router.get('/', function(req, res) {
  if (req.session.questions === undefined)
    req.session.questions = new QuestionSet().select(10).array;

  res.locals.questions = new QuestionSet(req.session.questions).noanswers.array;
  res.render('Quiz');
});

router.post('/submit/', function(req, res) {
  if (req.session.questions === undefined)
    return res.status(200).json({ results: [] });

  if (req.body.answers === undefined || req.body.answers.length != req.session.questions.length)
    return res.status(400).send();

  let results = [];
  let correctAnswers = [];
  req.session.questions.forEach(function(question, i) {
    if (question.answer.toLowerCase() === req.body.answers[i].toLowerCase())
      results.push(true);
    else
      results.push(false);

    correctAnswers.push(question.answer.toUpperCase());
  });

  res.status(200).json({ results: results, answers: correctAnswers });
});

module.exports = router;
