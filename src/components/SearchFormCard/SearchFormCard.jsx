import './SearchFormCard.css';

import { formatDate } from '../../utils/constants';

function SearchFormCard({ article }) {
  return (
    <div className="search__form-card">
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
          <button type="button" className="form-card-save"></button>
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
  );
}

export default SearchFormCard;
