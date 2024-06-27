import styles from "./styles.module.scss";
import searchLogo from "/searchLogo.svg";

export const Input = ({ value, setValue, placeholder }) => {
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
