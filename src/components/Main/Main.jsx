import { useState } from 'react';
import './Main.css';

import { fetchNews } from '../../utils/api';

function Main() {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const encodedUrl = encodeURIComponent(keyword);
    console.log(encodedUrl);
    fetchNews(keyword)
      .then((data) => {
        console.log(data);
        // Handle the fetched data as needed
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  };

  return (
    <div className="main">
      <div className="main__overlay"></div>
      <div className="main__content">
        <div className="main__content-text">
          <h1 className="main__content-title">What's going on in the world?</h1>
          <p className="main__content-subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
        </div>

        <form className="main__content-search" onSubmit={handleSubmit}>
          <input
            type="text"
            className="main__content-search-input"
            placeholder="Enter topic"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button className="main__content-search-button" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Main;
