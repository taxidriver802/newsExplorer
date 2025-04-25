import { useState } from 'react';

import './App.css';

import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import About from '../About/About.jsx';
import Footer from '../Footer/Footer.jsx';

function App() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: '',
  });
  return (
    <>
      <Header user={user} setUser={setUser} />
      <Main />
      <About />
      <Footer />
    </>
  );
}

export default App;
