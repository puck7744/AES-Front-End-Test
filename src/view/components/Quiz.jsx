var React = require('react');

var Progress = require('./Progress.jsx');
var Instructions = require('./Instructions.jsx');
var Question = require('./Question.jsx');
var Grade = require('./Grade.jsx');

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0,
      pages: Array(this.questionCount+2).fill(false),
      answers: Array(this.questionCount).fill(null)
    };
    this.state.pages[0] = true;
  }

  render() {
    let page = this.state.currentPage;
    let content = null;

    // Decide content based on page number
    if (page == 0)
      content = <Instructions onAdvance={this.complete.bind(this, 0, null)} />;
    else if (page <= this.questionCount)
      content = <Question number={this.state.currentPage} data={this.props.questions[page-1]} onAnswer={(choice) => this.complete(page, choice)} />;
    else
      content = <Grade answers={this.state.answers} onReady={this.complete.bind(this, this.lastPage, null)} />;

    // Render structure and content
    return (
      <div className="quiz">
        <Progress pages={this.state.pages} current={page} setPage={(p) => this.setPage(p)} />
        {content}
      </div>
    );
  }

  get questionCount() {
    return this.props.questions.length;
  }

  setPage(num) {
    num = num || 0;
    num = Math.max(0, Math.min(num, this.lastPage));

    if (num === this.lastPage && !this.state.pages[this.lastPage])
      return;

    console.log("set page: ", num);
    this.setState({ currentPage: num });
  }

  get lastPage() {
    return this.state.pages.length-1;
  }

  complete(page, choice) {
    let newState = {};

    // Complete page
    newState.pages = this.state.pages.slice();
    newState.pages[page] = true;

    // Set answer if valid
    if (choice && page > 0 && page <= this.props.questions.length) {
      newState.answers = this.state.answers.slice();
      newState.answers[page-1] = choice;
    }

    if (page != this.lastPage)
      newState.currentPage = this.state.currentPage+1;

    // Prevent grading when there are unanswered questions
    if (page == this.lastPage-1)
      newState.answers.every((val, num) => {
        if (newState.answers[num] == null) {
          newState.currentPage = num+1;
          return false;
        }
        return true;
      });

    this.setState(newState);
  }
}

module.exports = Quiz;
