var React = require('react');
var Link = require('react-router').Link;
var MainContainer = require('./MainContainer');

var Home = React.createClass({
  render: function() {
    return (
      <MainContainer>
        <h1>GitHub Battle</h1>
        <p>motto</p>
        <Link to='/playerOne'>
          <button type='button'>Get Started</button>
        </Link>
      </MainContainer>
    );
  }
});

module.exports = Home;
