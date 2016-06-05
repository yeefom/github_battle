import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import {space} from '../styles/index';
import MainContainer from './MainContainer';
import Loading from './Loading';

function ConfirmBattle({isLoading, playersInfo, onInitiateBattle}) {
  return (
    isLoading === true
      ? <Loading speed={100} text={'Waiting'}/>
      : <MainContainer>
          <h1>Confirm Players</h1>
          <div>
            <UserDetailsWrapper header="Player One">
              <UserDetails info={playersInfo[0]} />
            </UserDetailsWrapper>
            <UserDetailsWrapper header="Player One">
              <UserDetails info={playersInfo[1]} />
            </UserDetailsWrapper>
          </div>
        <div>
          <div style={space}>
            <button type="button" onClick={onInitiateBattle}>
              Initiate Battle
            </button>
          </div>
          <div style={space}>
            <Link to="/playerOne">
              <button type="button"> Reselect Players </button>
            </Link>
          </div>
        </div>
      </MainContainer>
  );
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
};

export default ConfirmBattle;
