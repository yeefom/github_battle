var React = require('react');
var Link = require('react-router').Link;

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>GitHub Battle</h1>
        <p>motto</p>
        <Link to='/playerOne'>
          <button type='button'>Get Started</button>
        </Link>
      </div>
    );
  }
});

module.exports = Home;
