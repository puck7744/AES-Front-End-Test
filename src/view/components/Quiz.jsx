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
      answers: Array(this.questionCount).fill(null),
      complete: false
    };
    this.state.pages[0] = true;
  }

  render() {
    let page = this.state.currentPage;
    let content = null;

    // Decide content based on page number
    if (page == 0) {
      content = <Instructions onAdvance={this.updatePage.bind(this, 0, null)} />;
    }
    else if (page <= this.questionCount) {
      let questionData = Object.assign(
        {
          answer: this.state.answers[page-1],
          rightAnswer: this.state.rightAnswers ? this.state.rightAnswers[page-1] : null
        },
        this.props.questions[page-1]
      );

      content = <Question number={this.state.currentPage} data={questionData} onAnswer={(choice) => this.updatePage(page, choice)} />;
    }
    else {
      content = <Grade answers={this.state.answers} onReady={this.complete.bind(this)} />;
    }

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

    this.setState({ currentPage: num });
  }

  get lastPage() {
    return this.state.pages.length-1;
  }

  updatePage(page, choice) {
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

  complete(answers) {
    this.updatePage(this.lastPage, null);

    this.setState({
      rightAnswers: answers
    });
  }
}

module.exports = Quiz;
