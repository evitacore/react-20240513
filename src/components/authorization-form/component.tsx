import { ChangeEvent, FC, useState } from "react";
import { Button } from "../button/component";
import styles from "./styles.module.scss";
import { Input } from "../input/component";

interface AuthorizationFormProps {
  onLogin: (name: string) => void;
  onCancel: () => void;
}

export const AuthorizationForm: FC<AuthorizationFormProps> = ({
  onLogin,
  onCancel,
}) => {
  const [name, setName] = useState<string>("");
  return (
    <div className={styles.root}>
      <Input
        value={name}
        setValue={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <div className={styles.buttons}>
        <Button
          className={styles.login}
          onClick={() => {
            onLogin(name);
            setName("");
          }}
        >
          Login
        </Button>
        <Button onClick={onCancel}>Cancel</Button>
      </div>
    </div>
  );
};
