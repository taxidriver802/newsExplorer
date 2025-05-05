import './SearchFormSave.css';
import SearchFormSavedCard from '../SearchFormSavedCard/SearchFormSavedCard.jsx';

function SearchFormSave() {
  const Username = 'Jason Bourne';
  const keywords = ['keyword', 'example', 'change this', 'to your own', 'text'];

  return (
    <div className="search__form_save-header">
      <p className="search__form_save-saved">Saved articles</p>
      <h1 className="search__form_save-title">
        {Username}, you have # saved articles
      </h1>
      <p className="search__form_save-subtitle">
        By keyword: {keywords.join(', ')}.
      </p>
      <SearchFormSavedCard />
    </div>
  );
}

export default SearchFormSave;
