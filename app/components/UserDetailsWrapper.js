import React from 'react';

function UserDetailsWrapper(props) {
  return(
    <div>
      <p>{props.header}</p>
      {props.children}
    </div>
  );
}

export default UserDetailsWrapper;
