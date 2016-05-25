var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var style = require('../styles/index');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function ConfirmBattle(props) {
  return (
    props.isLoading === true
      ? <Loading speed={100} text={'Waiting'}/>
      : <MainContainer>
          <h1>Confirm Players</h1>
          <div>
            <UserDetailsWrapper header="Player One">
              <UserDetails info={props.playersInfo[0]} />
            </UserDetailsWrapper>
            <UserDetailsWrapper header="Player One">
              <UserDetails info={props.playersInfo[1]} />
            </UserDetailsWrapper>
          </div>
        <div>
          <div style={style.space}>
            <button type="button" onClick={props.onInitiateBattle}>
              Initiate Battle
            </button>
          </div>
          <div style={style.space}>
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

module.exports = ConfirmBattle;
