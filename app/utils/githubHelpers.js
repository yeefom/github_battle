var axios = require('axios');

// var id = 'CLIENT_ID';
// var sec = 'SECRET_ID';
// var param = "?client_id" + id + "&client_secrect=" + sec;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username);
}

function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username + '/repos');
}

function getTotalStars(repos) {
  return repos.data.reduce(function(pre, cur) {
    return pre + cur.stargazers_count;
  }), 0;
}

function getPlayersData(player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function(totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      };
    });
}

function calculateScores(players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[0].totalStars
  ];
}

var helpers = {
  getPlayersInfo: function(players) {
    // axios.all takes an array of promises, resolve each, and then
    return axios.all(players.map(function(username) {
      return getUserInfo(username);
    })).then(function(info) {
      return info.map(function(user) {
        return user.data;
      });
    }).catch(function(err) {
      console.warn('ERR in getPlayersInfo', err);
    });
  },

  battle: function(players) {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function(err) {
        console.warn('ERR in battle', err);
      });
  }
};

module.exports = helpers;
