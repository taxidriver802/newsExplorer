import './SearchFormSave.css';

function SearchFormSave() {
  console.log('SearchFormSave component rendered');
  return (
    <>
      <div className="search__form_save-header">
        <p className="search__form_save-saved">Saved articles</p>
        <h1 className="search__form_save-title">
          Username, you have # saved articles
        </h1>
        <p className="search__form_save-subtitle">
          By keywords: "keyword, example, change this"
        </p>
      </div>
    </>
  );
}

export default SearchFormSave;
