var React = require('react');
var ReactDOM = require('react-dom');
var Quiz = require('./views/components/Quiz.jsx');

// Read questions from rendered element
var questions = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));

// Create main component and render
ReactDOM.render(<Quiz questions={questions} />, document.getElementById('container'));
