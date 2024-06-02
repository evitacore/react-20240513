import { useContext, useState } from 'react';
import { Button } from '../button/component';
import { ThemeContext } from '../contexts/ThemeContext';
import { UserContext } from '../contexts/UserContext';
import { Modal } from '../modal/component';
import './style.css';

export const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const handleLogin = () => {
    const username = document.getElementById('username').value;
    setCurrentUser(username);
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return <header className="header">
    <div className="header-content">
        <Button onClick={toggleTheme}>Toggle Theme</Button>
    </div>
    <div className="header-profile">
    {currentUser ? (
      <>
        <span className="username">Hello, {currentUser}</span>
        <Button onClick={handleLogout}>Logout</Button>
      </>
      ) : (
        <Button onClick={openModal}>Login</Button>
      )}
    </div>
    {isModalOpen && <Modal onClose={closeModal}>
      <h2>Login</h2>
      <input id="username" type="text" placeholder="Enter your name" />
      <div className="modal-buttons">
        <button onClick={handleLogin}>Login</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </Modal>}
  </header>;
};