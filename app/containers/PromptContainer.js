var React = require('react');
var transparentBg = require('../styles').transparentBg;

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      username: ''
    };
  },
  onUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    });
  },
  onSubmitUser: function(e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });
    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      });
    } else {
      this.context.router.push('playerTwo/' + this.state.username);
    }
  },
  render: function() {
    return (
      <div>
        <h1 style={transparentBg}>{this.props.route.header}</h1>
        <div>
          <form onSubmit={this.onSubmitUser}>
            <div>
              <input
                palceholder="Github Username"
                type="text"
                onChange={this.onUpdateUser}
                value={this.state.username} />
            </div>
            <div>
              <button type="submit">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = PromptContainer;
