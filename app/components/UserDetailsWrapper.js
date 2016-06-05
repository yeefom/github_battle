import React from 'react';

function UserDetailsWrapper({header, children}) {
  return(
    <div>
      <p>{header}</p>
      {children}
    </div>
  );
}

export default UserDetailsWrapper;
