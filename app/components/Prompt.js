var React = require('react');
var transparentBg = require('../styles').transparentBg;
var PropTypes = React.PropTypes;

function Prompt(props) {
   return (
    <div>
      <h1 style={transparentBg}>{props.header}</h1>
      <div>
        <form onSubmit={props.onSubmitUser}>
          <div>
            <input
              palceholder="Github Username"
              type="text"
              onChange={props.onUpdateUser}
              value={props.username} />
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

Prompt.PropTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

module.exports = Prompt;
