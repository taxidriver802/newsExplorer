import { useState, useEffect } from 'react';
import './SearchFormSave.css';
import SearchFormSavedCard from '../SearchFormSavedCard/SearchFormSavedCard.jsx';
import Footer from '../Footer/Footer.jsx';
import { getGreeting } from '../../utils/constants.js';

function SearchFormSave({ user, savedArticles, handleDeleteArticle }) {
  const [greeting, setGreeting] = useState('');
  const [isArticles, setIsArticles] = useState(false);
  const uniqueKeywords = [
    ...new Set(savedArticles.map((article) => article.keyword)),
  ]
    .map((keyword) => keyword.charAt(0).toUpperCase() + keyword.slice(1))
    .sort();

  useEffect(() => {
    const greetingMessage = getGreeting();
    setGreeting(greetingMessage);
    const articleAmount = savedArticles.length;
    setIsArticles(articleAmount > 0);
  });

  return (
    <div className="search__form_save-header">
      <div className="search__form_save-text">
        <p className="search__form_save-saved">Saved articles</p>
        <h1 className="search__form_save-title">
          {greeting} {user.username}
          {isArticles
            ? `, you have ${savedArticles.length} saved article${
                savedArticles.length > 1 ? 's' : ''
              }`
            : ''}
        </h1>
        <p className="search__form_save-subtitle">
          By keywords:{' '}
          {uniqueKeywords.slice(0, 2).map((keyword, index) => (
            <span key={index} className="search__form_save-keyword">
              {keyword}
              {index === 0 && uniqueKeywords.length > 1 ? ', ' : ''}
            </span>
          ))}
          {uniqueKeywords.length > 2 && (
            <span className="search__form_save-keyword">
              {' '}
              and {uniqueKeywords.length - 2} other
              {uniqueKeywords.length - 2 > 1 ? 's' : ''}
            </span>
          )}
        </p>
      </div>
      <div className="search__form_saved_card-container">
        {savedArticles.map((article, index) => (
          <SearchFormSavedCard
            key={index}
            article={article}
            keyword={article.keyword}
            handleDeleteArticle={handleDeleteArticle}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default SearchFormSave;
