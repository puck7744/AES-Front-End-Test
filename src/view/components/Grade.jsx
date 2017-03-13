var React = require('react');

class Grade extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      finished: false,
      success: false
    };

    this.submit(this.props.answers);
  }

  render() {
    let content = null;

    if (this.state.finished) {
      if (this.state.success) {
        content = [
          <h1 key='title'>Your Grade: {this.grade}</h1>,
          <p key='desc'>You answered {this.correct} out of {this.total} correctly ({Math.round((this.correct/this.total)*100)}%)</p>
        ];
      }
      else {
        content = <h1>Something went wrong!</h1>;
      }
    }
    else {
      content = <h1>Your answers are being checked...</h1>;
    }

    return (
      <div className="page grade">
        {content}
      </div>
    );
  }

  get correct() {
    if (!this.state.results || this.state.results.constructor !== Array)
      return 0;

    return this.state.results.filter(function(n){return n}).length;
  }

  get total() {
    if (!this.state.results || this.state.results.constructor !== Array)
      return 0;

    return this.state.results.length;
  }

  get grade() {
    // http://www.cs.uni.edu/~mccormic/lettergrade.html
    if (this.state.results && this.state.results.constructor === Array) {
      let percent = Math.round((this.correct/this.total)*100);

      if (percent > 93) return 'A';
      if (percent > 89) return 'A-';
      if (percent > 86) return 'B+';
      if (percent > 82) return 'B';
      if (percent > 79) return 'B-';
      if (percent > 76) return 'C+';
      if (percent > 72) return 'C';
      if (percent > 69) return 'C-';
      if (percent > 66) return 'D+';
      if (percent > 62) return 'D';
      if (percent > 60) return 'D-';
      return 'F';
    }
    return '?';
  }

  submit() {
    var scope = this;
    var request = new XMLHttpRequest();
    request.open('POST', '/quiz/submit/', true);
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function() {
      switch (request.status) {
        case 200:
          scope.setState(Object.assign(
            {
              finished: true,
              success: true
            },
            JSON.parse(request.response)
          ));
          scope.props.onReady();
          break;
        default:
          scope.setState({
            finished: true,
            success: false
          });
      }
    };

    request.onerror = function() {
      scope.setState({
        finished: true,
        success: false
      });
    };

    request.send(JSON.stringify({ answers: this.props.answers }));
  }
}

module.exports = Grade;
