var React = require('react');
module.exports = function(props) {
  return <div className={'progress-run' + (props.complete ? ' complete' : '')} />;
}
