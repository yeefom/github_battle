import React, {PropTypes} from 'react';
import {transparentBg} from '../styles';


function Prompt({header, onSubmitUser, onUpdateUser, username}) {
   return (
    <div>
      <h1 style={transparentBg}>{header}</h1>
      <div>
        <form onSubmit={onSubmitUser}>
          <div>
            <input
              palceholder="Github Username"
              type="text"
              onChange={onUpdateUser}
              value={username} />
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

export default Prompt;
