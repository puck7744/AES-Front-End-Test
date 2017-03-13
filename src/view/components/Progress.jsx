var React = require('react');

var ProgressStop = require('./ProgressStop.jsx');
var ProgressRun = require('./ProgressRun.jsx');

class Progress extends React.Component {
  render() {
    let bar = [];
    let pages = this.props.pages;

    for (let i = 0; i < pages.length; i++) {
      bar.push(<ProgressStop key={'stop'+i} active={i == this.props.current} complete={pages[i]} onClick={() => this.props.setPage(i)} />);

      if (i+1 < pages.length) { // Not last stop?
        let complete = pages[i] && (pages[i+1] || i+1 == this.props.current);

        bar.push(<ProgressRun key={'run'+i} complete={complete} />);
      }
    }

    return (
      <div className="progress">
        {bar}
      </div>
    );
  }
}

module.exports = Progress;
