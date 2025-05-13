import '.SearchFormSaveEmpty.css';

function SearchFormSaveEmpty() {
  return (
    <div className="search__form_save-empty-container">
      <h1 className="search__form_save-empty-title">Nothing saved yet</h1>
      <p className="search__form_save-empty-subtitle">
        Save articles to view them here
      </p>
    </div>
  );
}

export default SearchFormSaveEmpty;
