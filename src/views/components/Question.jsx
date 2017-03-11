var React = require('react');

var Answer = require('./Answer.jsx');

class Question extends React.Component {
  render() {
    var answers = [];
    var scope = this;

    Object.keys(this.props.data).map(function(key) {
      var cap;
      if (typeof(key) === 'string' && (cap = key.match(/choice_([a-z])/)))
        answers.push(<Answer key={key} id={cap[1]} title={scope.props.data[key]} />);
    });

    return (
      <div className="question">
        <h1 className="title">{this.props.number+1}. {this.props.data.text}</h1>
        <div className="answers">
          {answers}
        </div>
      </div>
    );
  }
}

module.exports = Question;
