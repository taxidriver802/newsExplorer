import { useState } from 'react';

import './App.css';

import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
import About from '../About/About.jsx';
import Footer from '../Footer/Footer.jsx';

function App() {
  const [user, setUser] = useState({
    email: 'ja@co.com' /* Testing : Remove when done */,
    password: 'qwerty123' /* Testing : Remove when done */,
    username: 'Jason' /* Testing : Remove when done */,
  });
  return (
    <>
      <Header user={user} setUser={setUser} />
      <Main />
      <SearchForm />
      <About />
      <Footer />
    </>
  );
}

export default App;
