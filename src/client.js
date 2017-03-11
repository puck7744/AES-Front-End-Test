var React = require('react');
var ReactDOM = require('react-dom');
var Quiz = require('./views/components/Quiz.jsx');

var questions = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));

ReactDOM.render(<Quiz questions={questions} />, document.getElementById('container'));
