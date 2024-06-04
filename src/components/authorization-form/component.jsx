import { useState } from "react";
import { Button } from "../button/component";
import styles from './styles.module.scss';

export const AuthorizationForm = ({ onLogin, onCancel }) => {
  const [name, setName] = useState('');
  return (
    <div className={styles.root}>
      <input className={styles.input} placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        <Button
          className={styles.login}
          onClick={() => {
            onLogin(name);
            setName('')
          }}
        >
          Login
        </Button>
        <Button onClick={onCancel}>Cancel</Button>
      </div>
    </div>
  );
};