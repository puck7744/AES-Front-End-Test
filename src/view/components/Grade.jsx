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
    if (this.state.finished) {
      if (this.state.success) {
        return <h1>All done!</h1>;
      }
      else {
        return <h1>Something went wrong!</h1>;
      }
    }
    else {
      return <h1>Your answers are being checked...</h1>;
    }
  }

  submit() {
    var scope = this;
    var request = new XMLHttpRequest();
    request.open('POST', '/quiz/submit/', true);
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function() {
      switch (request.status) {
        case 200:
          scope.setState({
            finished: true,
            success: true
          });
          console.log(request.response);
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
