var React = require('react');

var Progress = require('./Progress.jsx');
var Question = require('./Question.jsx');
var Grade = require('./Grade.jsx');

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    let questionCount = this.props.questions.length;

    this.state = {
      currentQuestion: 0,
      answers: Array(questionCount).fill(null)
    };
  }

  render() {
    let q = this.state.currentQuestion;
    let page = null;

    if (q < this.props.questions.length)
      page = <Question number={this.state.currentQuestion} data={this.props.questions[q]} onAnswer={(choice) => this.update(q, choice)} />;
    else
      page = <Grade answers={this.state.answers} />;

    return (
      <div className="quiz">
        <Progress current={q} answers={this.state.answers} />
        {page}
      </div>
    );
  }

  update(question, choice) {
    console.log(`quiz progress: ${question} = ${choice}`);

    let newAnswers = this.state.answers.slice();
    newAnswers[question] = choice;

    this.setState({
      answers: newAnswers,
      currentQuestion: this.state.currentQuestion+1
    });
  }
}

module.exports = Quiz;
