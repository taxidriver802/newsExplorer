import { useState, useEffect } from 'react';
import { getGreeting } from '../../utils/constants.js';
import './SearchFormSave.css';
import SearchFormSavedCard from '../SearchFormSavedCard/SearchFormSavedCard.jsx';
import Footer from '../Footer/Footer.jsx';

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
    setIsArticles(savedArticles.length > 0);
  }, [savedArticles.length]);

  return (
    <div className="search__form-container">
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
          {uniqueKeywords.length > 0 && (
            <p className="search__form_save-subtitle">
              By keyword{uniqueKeywords.length > 1 && 's'}:{' '}
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
          )}
        </div>
        {isArticles ? (
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
        ) : (
          <div className="search__form-empty">
            <div className="search__form-empty-icon"></div>
            <div className="search__form-empty-text">
              No saved articles. Try searching different Keywords on the Home
              page to find some you like!
            </div>
          </div>
        )}
      </div>
      <div className="search__form_save-footer">
        <Footer />
      </div>
    </div>
  );
}

export default SearchFormSave;
