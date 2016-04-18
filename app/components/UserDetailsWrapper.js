var React = require('react');

function UserDetailsWrapper(props) {
  return(
    <div>
      <p>{props.header}</p>
      {props.children}
    </div>
  );
}

module.exports = UserDetailsWrapper;
