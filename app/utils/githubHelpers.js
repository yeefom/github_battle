var axios = require('axios');

var id = 'CLIENT_ID';
var sec = 'SECRET_ID';
var param = "?client_id" + id + "&client_secrect=" + sec;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param);
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
  }
};

module.exports = helpers;
