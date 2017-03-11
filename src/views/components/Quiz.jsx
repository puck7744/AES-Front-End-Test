var React = require('react');

var Question = require('./Question.jsx');

class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: 0
    };
  }

  render() {
    return <Question number={this.state.currentQuestion} data={this.props.questions[this.state.currentQuestion]} />;
  }
}

module.exports = Quiz;
