var React = require('react');

module.exports = function(props) {
  return (
    <button onClick={() => props.onClick()}>{props.letter.toUpperCase()}. {props.title}</button>
  );
}
