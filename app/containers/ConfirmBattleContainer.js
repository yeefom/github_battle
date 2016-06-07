import React, {Component} from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import {getPlayersInfo} from '../utils/githubHelpers';

class ConfirmBattleContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      playersInfo: []
    };
  }
  async componentDidMount() {
    const {query} = this.props.location;
    try {
      const players = await getPlayersInfo([query.playerOne, query.playerTwo]);
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      });
    } catch(err) {
      console.warn('ERR in ConfirmBattleContainer:', err);
    }
  }
  handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state:{
        playersInfo: this.state.playersInfo
      }
    });
  }
  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onInitiateBattle={() => this.handleInitiateBattle()}/>
    );
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ConfirmBattleContainer;
