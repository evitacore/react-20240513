import { ChangeEvent, FC } from "react";
import styles from "./styles.module.scss";
import searchLogo from "/searchLogo.svg";

type InputProps = {
  value: number | string;
  setValue: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export const Input: FC<InputProps> = ({ value, setValue, placeholder }) => {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>
        <img className={styles.svg} src={searchLogo} />
      </span>
      <input
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};
