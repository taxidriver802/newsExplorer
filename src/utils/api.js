import { BASE_URL } from './constants';

function request(url, options) {
  return fetch(url, options)
    .then(checkResponse)
    .catch((error) =>
      Promise.reject(`Network error: ${error.message || error}`)
    );
}

function checkResponse(res) {
  return res.ok
    ? res.json()
    : res
        .json()
        .then((err) => Promise.reject(`Error: ${res.status} - ${err.message}`));
}

export { request };
