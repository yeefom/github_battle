import React from 'react';
import {Link} from 'react-router';
import MainContainer from './MainContainer';

const Home = React.createClass({
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

export default Home;
