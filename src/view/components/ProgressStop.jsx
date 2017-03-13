var React = require('react');

module.exports = function(props) {
  let classes = 'progress-stop';

  if (props.active) classes += ' active';
  else if (props.complete) classes += ' complete';

  return <div className={classes} onClick={props.onClick} />;
};
