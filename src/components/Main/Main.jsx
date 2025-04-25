import './Main.css';

function Main() {
  return (
    <div className="main">
      <div className="main__overlay"></div>
      <div className="main__content">
        <div className="main__content-text">
          <h1 className="main__content-title">What's going on in the world?</h1>
          <p className="main__content-subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
        </div>
        <div className="main__content-search">
          <input
            type="text"
            className="main__content-search-input"
            placeholder="Enter topic"
          />
          <button className="main__content-search-button" type="submit">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
