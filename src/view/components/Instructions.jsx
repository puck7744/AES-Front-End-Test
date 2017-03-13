var React = require('react');

module.exports = function(props) {
  return (
    <div className="page instructions">
      <h1>Welcome!</h1>
      <p>This sample test is designed to show the functionality of this React-based quiz framework. You can learn more about it in the <a href="https://github.com/puck7744/AES-Front-End-Test#readme" target="_blank">Readme on GitHub</a>.</p>
      <p>Click on a blue button to advance, or click on the dots in the timeline to the left to jump around.</p>
      <button onClick={props.onAdvance}>Let's get started!</button>
    </div>
  );
};
