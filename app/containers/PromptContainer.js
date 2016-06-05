import React from 'react';
import Prompt from '../components/Prompt';

const PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      username: ''
    };
  },
  handleUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    });
  },
  handleSumbitUser: function(e) {
    e.preventDefault();
    const {username} = this.state;
    this.setState({
      username: ''
    });
    const {playerOne} = this.props.routeParams;
    if (playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne,
          username
        }
      });
    } else {
      this.context.router.push(`/playerTwo/${username}`);
    }
  },
  render: function() {
    return (
      <Prompt
        onSubmitUser={this.handleSumbitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    );
  }
});

export default PromptContainer;
