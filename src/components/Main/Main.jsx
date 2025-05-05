import { useState } from 'react';
import './Main.css';

import { fetchNews } from '../../utils/api';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import SearchFormSave from '../SearchFormSave/SearchFormSave.jsx';
import About from '../About/About.jsx';
import Footer from '../Footer/Footer.jsx';

function Main({ button }) {
  const [keyword, setKeyword] = useState('');
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    fetchNews(keyword)
      .then((data) => {
        const formattedArticles = data.articles.map((article) => ({
          title: article.title,
          description: article.description,
          publishedAt: article.publishedAt,
          url: article.url,
          urlToImage: article.urlToImage,
          sourceName: article.source.name,
        }));
        setArticles(formattedArticles);
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  };

  return (
    <>
      <div className="main">
        <div className="main__overlay"></div>
        <div className="main__content">
          <div className="main__content-text">
            <h1 className="main__content-title">
              What's going on in the world?
            </h1>
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

      {isLoading && <Preloader />}

      {!isLoading && articles.length > 0 && <SearchForm articles={articles} />}

      <About />

      <Footer />
    </>
  );
}

export default Main;
