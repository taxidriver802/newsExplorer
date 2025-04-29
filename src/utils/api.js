import { NEWS_API_URL, APIkey } from './constants';

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

export const fetchNews = (keyword) => {
  const url = `${NEWS_API_URL}?q=${encodeURIComponent(
    keyword
  )}&apiKey=${APIkey}`;
  return request(url);
};

export { request };
