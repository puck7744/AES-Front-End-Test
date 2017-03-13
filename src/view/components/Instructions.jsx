var React = require('react');

module.exports = function(props) {
  return (
    <div className="page instructions">
      <h1>Welcome!</h1>
      <p>Click on the dots in the timeline on the left to jump around.</p>
      <button onClick={props.onAdvance}>Let's get started</button>
    </div>
  );
};
