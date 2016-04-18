var React = require('react');
var PropTypes = React.PropTypes;

function UserDetails (user) {
  return (
    <div>
      {!!user.score && <li><h3>Score: {user.score}</h3></li>}
      <li> <img src={user.info.avatar_url}/></li>
      {user.info.name && <li>Name: {user.info.name}</li>}
      <li>Username: {user.info.login}</li>
      {user.info.location && <li>Location: {user.info.location}</li>}
      {user.info.company && <li>Company: {user.info.company}</li>}
      <li>Followers: {user.info.followers}</li>
      <li>Following: {user.info.following}</li>
      <li>Public Repos: {user.info.public_repos}</li>
      {user.info.blog && <li>Blog: <a href={user.info.blog}> {user.info.blog}</a></li>}
    </div>
  );
}

UserDetails.propTypes = {
  score: PropTypes.number,
  // PropTypes.shape checks properties of an obj
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    public_repos: PropTypes.number.isRequired
  })
};

module.exports = UserDetails;
