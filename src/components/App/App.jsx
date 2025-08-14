import { useState, useEffect } from 'react';

import './App.css';

import Header from '../Header/Header.jsx';
import HeaderMenu from '../HeaderMenu/HeaderMenu.jsx';
import Main from '../Main/Main.jsx';
import SearchFormSave from '../SearchFormSave/SearchFormSave.jsx';

function App({ articles }) {
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: '',
    _id: '',
  });
  const [button, setButton] = useState('home');
  const [savedArticles, setSavedArticles] = useState([]);
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [whichModalOpen, setWhichModalOpen] = useState('signin');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const compareArticles = (fetchedArticles) => {
    const savedUrls = new Set(savedArticles.map((article) => article.url));
    return fetchedArticles.map((article) => ({
      ...article,
      isSaved: savedUrls.has(article.url),
    }));
  };

  const handleDeleteArticle = async (article) => {
    const token = localStorage.getItem('jwt');
    try {
      const response = await fetch(
        `http://localhost:3001/cards/${article._id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const updatedArticles = savedArticles.filter(
          (a) => a._id !== article._id
        );
        setSavedArticles(updatedArticles);
      } else {
        console.error('Failed to delete article', response.statusText);
        const errorData = await response.json();
        console.error('Error details:', errorData);
      }
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  const fetchUser = async () => {
    const token = localStorage.getItem('jwt');
    if (!token) return;

    try {
      const res = await fetch('http://localhost:3001/users/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw res;
      const userData = await res.json();
      setUser(userData);
    } catch (err) {
      console.error('Failed to fetch user data:', err);
      localStorage.removeItem('jwt');
    }
  };

  const fetchSavedArticles = async () => {
    const token = localStorage.getItem('jwt');
    if (!token) return;

    try {
      const res = await fetch('http://localhost:3001/savedCards', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to fetch saved articles');
      const data = await res.json();
      setSavedArticles(data);
    } catch (err) {
      console.error('Error fetching saved articles:', err);
    }
  };

  function handleSignInClick() {
    setWhichModalOpen('signin');
    setIsModalOpen(true);
    setIsDropdownOpen(false);
  }

  function handleSignOutClick() {
    setUser({ email: '', password: '', username: '' });
    localStorage.removeItem('jwt');
    setButton('home');
    setIsDropdownOpen(false);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    fetchSavedArticles();
  }, [updateTrigger]);

  return (
    <>
      {isDropdownOpen && (
        <div className="app__header_menu">
          <HeaderMenu
            user={user}
            button={button}
            setButton={setButton}
            handleSignInClick={handleSignInClick}
            handleSignOutClick={handleSignOutClick}
            setIsDropdownOpen={setIsDropdownOpen}
          />
        </div>
      )}

      <Header
        user={user}
        setUser={setUser}
        setButton={setButton}
        button={button}
        setUpdateTrigger={setUpdateTrigger}
        setIsDropdownOpen={setIsDropdownOpen}
        isDropdownOpen={isDropdownOpen}
        handleSignInClick={handleSignInClick}
        handleSignOutClick={handleSignOutClick}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        whichModalOpen={whichModalOpen}
        setWhichModalOpen={setWhichModalOpen}
      />

      {button !== 'saved' && (
        <Main
          button={button}
          setUpdateTrigger={setUpdateTrigger}
          articles={articles}
          compareArticles={compareArticles}
        />
      )}
      {button === 'saved' && (
        <SearchFormSave
          user={user}
          savedArticles={savedArticles}
          handleDeleteArticle={handleDeleteArticle}
        />
      )}
    </>
  );
}

export default App;
