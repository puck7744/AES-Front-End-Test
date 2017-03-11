var React = require('react');

var ProgressStop = require('./ProgressStop.jsx');
var ProgressRun = require('./ProgressRun.jsx');

class Progress extends React.Component {
  render() {
    let bar = [];
    let answers = this.props.answers;

    for (let i = 0; i < answers.length; i++) {
      bar.push(<ProgressStop key={'stop'+i} />);

      if (i+1 < answers.length) // Not last stop?
        bar.push(<ProgressRun key={'run'+i} />);
    }

    return (
      <div className="progress">
        {bar}
      </div>
    );
  }
}

module.exports = Progress;
