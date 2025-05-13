import { NEWS_API_URL, APIkey } from './constants';

function request(url, options) {
  return fetch(url, options)
    .then(checkResponse)
    .catch((error) => {
      return Promise.reject(`Network error: ${error.message || error}`);
    });
}

function checkResponse(res) {
  const contentType = res.headers.get('Content-Type') || '';

  return res.text().then((text) => {
    if (res.ok && contentType.includes('application/json')) {
      return JSON.parse(text);
    } else {
      throw new Error(
        `Unexpected response. Status: ${res.status}, Content-Type: ${contentType}`
      );
    }
  });
}

export const fetchNews = (keyword) => {
  if (!keyword || keyword.trim() === '') {
    return Promise.reject('Keyword is required');
  }

  const url = `${NEWS_API_URL}?q=${encodeURIComponent(
    keyword
  )}&apiKey=${APIkey}`;
  return request(url);
};

export { request };
