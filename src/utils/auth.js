import { request } from './api.js';
import { BASE_URL } from './constants.js';

function signup(email, password, username) {
  return request(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, username }),
  })
    .then((response) => {
      if (!response.token) {
        throw new Error('Token not returned from signup');
      }
      return response;
    })
    .catch((error) =>
      Promise.reject(`Failed to sign up: ${error.message || error}`)
    );
}
function signin(email, password) {
  return request(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).catch((error) =>
    Promise.reject(`Failed to sign in: ${error.message || error}`)
  );
}

function checkToken(token) {
  if (!token) {
    return Promise.reject('No token provided');
  }
  return request(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).catch((error) =>
    Promise.reject(`Failed to check token: ${error.message || error}`)
  );
}

export { signup, signin, checkToken };
