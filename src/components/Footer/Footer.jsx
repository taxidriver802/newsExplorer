import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">© 2025 NewsExplorer. Powered by News API</p>
        <div className="footer__links">
          <div className="footer__links-words">
            <button className="footer__button" type="button">
              Home
            </button>
            <button className="footer__button" type="button">
              TripleTen
            </button>
          </div>
          <div className="footer__links-icons">
            <a
              className="footer__button"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="src/assets/icons/Vector.svg"
                alt="GitHub logo"
                className="footer__github-logo"
              />
            </a>
            <a
              className="footer__button"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="src/assets/icons/linkedin.svg"
                alt="LinkedIn logo"
                className="footer__linkedin-logo"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
