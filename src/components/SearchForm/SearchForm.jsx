import { useState } from 'react';

import './SearchForm.css';
import SearchFormCard from '../SearchFormCard/SearchFormCard';

function SearchForm({ articles, keyword, setUpdateTrigger }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="search__results">
      <h1 className="search__results-title">Search results</h1>
      <div className="search__results-container">
        {(showMore ? articles : articles.slice(0, 3)).map((article, index) => (
          <SearchFormCard
            key={index}
            article={article}
            keyword={keyword}
            setUpdateTrigger={setUpdateTrigger}
          />
        ))}
      </div>
      <div className="search__results-button-container">
        <button
          className="search__results-button-more"
          type="button"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show less' : 'Show more'}
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
