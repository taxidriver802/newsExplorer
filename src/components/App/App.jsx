import { useState } from 'react';

import './App.css';

import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';

function App() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: '',
    _id: '',
  });
  const [button, setButton] = useState('');
  return (
    <>
      <Header
        user={user}
        setUser={setUser}
        setButton={setButton}
        button={button}
      />
      <Main button={button} />
    </>
  );
}

export default App;
