import { useCallback, useState } from "react";
import { Button } from "../button/component";
import { AuthorizationForm } from "../authorization-form/component";
import { Modal } from "../modal/component";
import { useUser } from "../../contexts/user/hooks";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

export const AuthorizationButton = () => {
  const { user, logout, login } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleClose = useCallback(() => setIsModalOpen(false), []);
  const handleLogin = useCallback(
    (name) => {
      login(name);
      handleClose();
      navigate('login');
    },
    [login, handleClose, navigate]
  );

  return (
    <div>
      <span className={styles.user}>{user && `Hello, ${user}!`}</span>
      {user ? (
        <Button onClick={logout}>Logout</Button>
      ) : (
        <Button onClick={() => setIsModalOpen(true)}>Login</Button>
      )}
      {isModalOpen && (
        <Modal onClose={handleClose}>
          <AuthorizationForm onLogin={handleLogin} onCancel={handleClose} />
        </Modal>
      )}
    </div>
  );
};
