import './Preloader.css';

function Preloader() {
  return (
    <div className="preloader-container">
      <div className="circle-preloader"></div>
      <p className="text-preloader">Searching for news...</p>
    </div>
  );
}

export default Preloader;
