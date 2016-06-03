import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import MainContainer from './MainContainer';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import Loading from './Loading';

function StartOver() {
  return (
    <Link to='/playerOne'>
      <button type='button'>Start Over</button>
    </Link>
  );
}

function Tie() {
  return (
    <MainContainer>
      <h1>It's a tie!</h1>
      <StartOver/>
    </MainContainer>
  );
}

function Results(props) {
  if (props.isLoading === true) {
    return (
      <Loading/>
    );
  }

  if (props.scores[0] === props.scores[1]) {
    return (
      <Tie/>
    );
  }

  const winningIndex = props.scores[0] > props.scores[1] ? 0 :1;
  const losingIndex = winningIndex === 0 ? 1 : 0;
  return (
    <MainContainer>
      <h1>Results</h1>
      <div>
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <div>
        <StartOver/>
      </div>
    </MainContainer>
  );
}

Results.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
};

export default Results;
