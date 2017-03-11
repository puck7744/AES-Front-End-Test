var React = require('react');

class Answer extends React.Component {
  render() {
    return (
      <button>{this.props.id.toUpperCase()}. {this.props.title}</button>
    );
  }
}

module.exports = Answer;
