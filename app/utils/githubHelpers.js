import axios from 'axios';
import {logMsg} from './logMsg';

// const id = 'CLIENT_ID';
// const sec = 'SECRET_ID';
// const param = "?client_id" + id + "&client_secrect=" + sec;

function getUserInfo(username) {
  return axios.get(`https://api.github.com/users/${username}`);
}

function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos`);
}

function getTotalStars(repos) {
  return repos.data.reduce((pre, cur) => pre + cur.stargazers_count, 0);
}

async function getPlayersData(player) {
  try {
    const repos = await getRepos(player.login);
    const totalStars = await getTotalStars(repos);
    return {
      followers: player.followers,
      totalStars
    };
  } catch (err) {
    return logMsg(err.statusText, {
      player,
      err
    });
  }
}

function calculateScores(players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[0].totalStars
  ];
}

export async function getPlayersInfo(players) {
  try {
    const info = await Promise.all(players.map(username => getUserInfo(username)));
    return info.map(user => user.data);
  } catch (err) {
    return logMsg(err.statusText, {
      players,
      err
    });
  }
  // // axios.all takes an array of promises, resolve each, and then
  // return axios.all(players.map(username => getUserInfo(username)))
  //   .then(info => info.map(user => {
  //     return user.data
  //   }))
  //   .catch(err => console.warn('ERR in getPlayersInfo', err));
}

export async function battle(players) {
  const playerOneData = getPlayersData(players[0]);
  const playerTwoData = getPlayersData(players[1]);
  try {
    const data = await Promise.all([playerOneData, playerTwoData]);
    return calculateScores(data);
  } catch (err) {
    return logMsg(err.statusText, {
      players,
      err
    });
  }
}
