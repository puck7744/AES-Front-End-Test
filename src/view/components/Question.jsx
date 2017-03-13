var React = require('react');

var Answer = require('./Answer.jsx');

class Question extends React.Component {
  render() {
    var answers = [];
    var scope = this;

    Object.keys(this.props.data).sort().map(function(key) {
      var cap;
      if (typeof(key) === 'string' && (cap = key.match(/choice_([a-z])/)))
        answers.push(<Answer key={key} letter={cap[1]} onClick={() => scope.answer(cap[1])} title={scope.props.data[key]} />);
    });

    return (
      <div className="page question">
        <h1 className="title">{this.props.number}. {this.props.data.text}</h1>
        <div className="answers">
          {answers}
        </div>
      </div>
    );
  }

  answer(choice) {
    this.props.onAnswer(choice);
  }
}

module.exports = Question;
