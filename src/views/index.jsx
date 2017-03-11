var React = require('react');

var QuestionSet = require('../QuestionSet.js')

let questions = new QuestionSet().narrow(10).noanswers.array;

module.exports = (
  <html>
    <head>
      <title>Sample Quiz</title>
    </head>
    <body>
      <div id="container" />
      <script id="initial-data" data-json={JSON.stringify(questions)} />
      <script src="/bundle.js" />
    </body>
  </html>
)
