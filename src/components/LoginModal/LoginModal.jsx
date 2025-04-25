import './LoginModal.css';

function LoginModal({ title, setWhichModalOpen }) {
  function handleClick() {
    setWhichModalOpen('signup');
  }
  return (
    <>
      <h1 className="login__title">{title}</h1>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" />
      <label htmlFor="password">Password</label>
      <input type="text" id="password" />
      <button type="submit">Sign in</button>
      <button type="button" onClick={handleClick}>
        or Sign up
      </button>
    </>
  );
}

export default LoginModal;
