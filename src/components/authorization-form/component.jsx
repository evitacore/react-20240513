import { useState } from "react";
import { Button } from "../button/component";
import styles from './styles.module.scss';
import { Input } from "../input/component";

export const AuthorizationForm = ({ onLogin, onCancel }) => {
  const [name, setName] = useState('');
  return (
    <div className={styles.root}>
      <Input value={name} setValue={(e) => setName(e.target.value)} placeholder="Enter your name" />
      <div className={styles.buttons}>
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