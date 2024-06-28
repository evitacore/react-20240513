import { FC, useCallback, useState } from "react";
import { Button } from "../button/component";
import { AuthorizationForm } from "../authorization-form/component";
import { Modal } from "../modal/component";
import { useUser, useUserSetters } from "../../contexts/user/hooks";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

export const AuthorizationButton: FC = () => {
  const user = useUser();
  const { logout, login } = useUserSetters();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleClose = useCallback(() => setIsModalOpen(false), []);
  const handleLogin = useCallback(
    (name: string) => {
      login(name);
      handleClose();
      navigate("login");
    },
    [login, handleClose, navigate]
  );

  return (
    <div className={styles.root}>
      <span className={styles.user}>{user && `Hello, ${user}!`}</span>
      {user ? (
        <Button className={styles.logout} onClick={logout}>
          Logout
        </Button>
      ) : (
        <Button className={styles.login} onClick={() => setIsModalOpen(true)}>
          Login
        </Button>
      )}
      {isModalOpen && (
        <Modal onClose={handleClose}>
          <AuthorizationForm onLogin={handleLogin} onCancel={handleClose} />
        </Modal>
      )}
    </div>
  );
};
