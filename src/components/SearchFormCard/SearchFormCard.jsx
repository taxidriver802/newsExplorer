import { useState } from 'react';
import './SearchFormCard.css';
import { formatDate } from '../../utils/constants';

function SearchFormCard({ article, keyword, setUpdateTrigger }) {
  const [showAuthMessage, setShowAuthMessage] = useState(false);
  const [isSaved, setIsSaved] = useState(article?.isSaved || false);

  async function handleCardSave() {
    const token = localStorage.getItem('jwt');
    if (!token) {
      setShowAuthMessage(true);
      return;
    }
    try {
      const response = await fetch('http://localhost:3001/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          urlToImage: article.urlToImage,
          title: article.title,
          publishedAt: article.publishedAt,
          description: article.description,
          sourceName: article.sourceName,
          url: article.url,
          keyword: keyword,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save the card');
      }

      const savedCard = await response.json();
      setShowAuthMessage(false);
      setIsSaved(true);
      setUpdateTrigger((prev) => !prev);
    } catch (error) {
      console.error('Error saving card:', error);
    }
  }

  return (
    <a
      href={article?.url || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="search__form-card-link"
    >
      <div className="search__form-card" onClick={(e) => e.stopPropagation()}>
        <div className="form-card-img-container">
          <img
            className="form-card-img"
            src={
              article?.urlToImage
                ? article.urlToImage
                : 'https://via.placeholder.com/150'
            }
            alt={
              article?.title ? article.title : 'Head image for the news article'
            }
          />
          <div className="form-card-save-container">
            {showAuthMessage && (
              <div className="form-card-auth-message">
                <div className="form-card-auth-message-text">
                  Sign in to save articles
                </div>
              </div>
            )}
            <button
              type="button"
              className={`form-card-save ${isSaved ? 'form-card-save-y' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleCardSave();
              }}
            ></button>
          </div>
        </div>
        <div className="form-card-text">
          <p className="form-card-date">
            {article?.publishedAt
              ? formatDate(article?.publishedAt)
              : 'Article release date'}
          </p>
          <h2 className="form-card-title">
            {article?.title ? article.title : 'News title'}
          </h2>
          <p className="form-card-subtitle">
            {article?.description ? article.description : 'News Subtitle'}
          </p>
          <p className="form-card-source">
            {article?.sourceName ? article.sourceName : 'News source'}
          </p>
        </div>
      </div>
    </a>
  );
}

export default SearchFormCard;
