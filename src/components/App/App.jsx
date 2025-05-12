import { useState, useEffect } from 'react';

import './App.css';

import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import SearchFormSave from '../SearchFormSave/SearchFormSave.jsx';

function App({ articles }) {
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: '',
    _id: '',
  });
  const [button, setButton] = useState('');
  const [savedArticles, setSavedArticles] = useState([]);
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const compareArticles = (fetchedArticles) => {
    const savedUrls = new Set(savedArticles.map((article) => article.url));
    return fetchedArticles.map((article) => ({
      ...article,
      isSaved: savedUrls.has(article.url),
    }));
  };

  useEffect(() => {
    const token = localStorage.getItem('jwt');

    if (token) {
      fetch('http://localhost:3001/users/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((userData) => {
          setUser(userData);
        })
        .catch((err) => {
          console.error('Failed to fetch user data:', err);
          localStorage.removeItem('jwt');
        });
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('jwt');

    if (token) {
      fetch('http://localhost:3001/savedCards', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('Failed to fetch saved articles');
          }
        })
        .then((data) => {
          setSavedArticles(data);
        })
        .catch((err) => {
          console.error('Error fetching saved articles:', err);
        });
    }
  }, [updateTrigger]);

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

  return (
    <>
      <Header
        user={user}
        setUser={setUser}
        setButton={setButton}
        button={button}
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
