var React = require('react');

module.exports = function(props) {
  let classes = 'answer';

  if (props.correct != null) {
    classes += ' disabled';

    if (props.letter.toLowerCase() === props.correct.toLowerCase())
      classes += ' correct';
    else if (props.letter.toLowerCase() === props.answer.toLowerCase())
      classes += ' incorrect';
  }

  return (
    <button className={classes} onClick={() => props.onClick()}>{props.letter.toUpperCase()}. {props.text}</button>
  );
}
