import { NEWS_API_URL, APIkey } from './constants';

function request(url, options) {
  console.trace(`📡 Making request to: ${url}`);
  return fetch(url, options)
    .then(checkResponse)
    .catch((error) => {
      console.error('❌ Network error:', error);
      return Promise.reject(`Network error: ${error.message || error}`);
    });
}

function checkResponse(res) {
  const contentType = res.headers.get('Content-Type') || '';

  console.log('🔍 Response URL:', res.url);
  console.log('🔍 Status:', res.status);
  console.log('🔍 Content-Type:', contentType);

  return res.text().then((text) => {
    console.log('🧾 Raw response text:', text.slice(0, 100));
    if (res.ok && contentType.includes('application/json')) {
      return JSON.parse(text);
    } else {
      throw new Error(
        `❌ Unexpected response. Status: ${
          res.status
        }, Content-Type: ${contentType}, Body: ${text.slice(0, 100)}`
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
