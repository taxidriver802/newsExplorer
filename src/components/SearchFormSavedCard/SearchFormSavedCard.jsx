import { useState } from 'react';
import './SearchFormSavedCard.css';
import { formatDate } from '../../utils/constants';

function SearchFormSavedCard({ article, handleDeleteArticle }) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleUnsaveClick = () => setShowConfirm((prev) => !prev);

  const handleUnsaveConfirm = () => {
    handleDeleteArticle(article);
    setShowConfirm(false);
  };

  const {
    keyword = '',
    urlToImage,
    title = 'No News title',
    description = 'No News Subtitle',
    publishedAt,
    sourceName = 'No News source',
  } = article;

  const displayImage = urlToImage || 'https://via.placeholder.com/150';
  const imageAlt = title || 'Head image for the news article';
  const formattedKeyword = keyword.charAt(0).toUpperCase() + keyword.slice(1);
  const formattedDate = publishedAt
    ? formatDate(publishedAt)
    : 'Article release date';

  return (
    <div className="search__form-card">
      <div className="form-card-keyword-container">
        <p className="form-card-keyword">{formattedKeyword}</p>
      </div>

      <div className="form-card-img-container">
        <img className="form-card-img" src={displayImage} alt={imageAlt} />

        <div className="form-card-save-container">
          {showConfirm && (
            <button
              className="form-card-unsave-confirm"
              type="button"
              onClick={handleUnsaveConfirm}
            >
              Remove from saved
            </button>
          )}

          <button
            type="button"
            className={`form-card-unsave${
              showConfirm ? ' form-card-unsave-cancel' : ''
            }`}
            onClick={handleUnsaveClick}
          />
        </div>
      </div>

      <div className="form-card-text">
        <p className="form-card-date">{formattedDate}</p>
        <h2 className="form-card-title">{title}</h2>
        <p className="form-card-subtitle">{description}</p>
        <p className="form-card-source">{sourceName}</p>
      </div>
    </div>
  );
}

export default SearchFormSavedCard;
