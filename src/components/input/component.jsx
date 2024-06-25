import styles from "./styles.module.scss";

export const Input = ({ value, setValue, placeholder }) => {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>
        <svg className={styles.svg} width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4 11c0-3.859 3.141-7 7-7s7 3.141 7 7-3.141 7-7 7-7-3.141-7-7zm18 11a1 1 0 000-1.414l-3.975-3.975A8.948 8.948 0 0020 11c0-4.963-4.037-9-9-9s-9 4.037-9 9 4.037 9 9 9a8.948 8.948 0 005.611-1.975L20.586 22A1 1 0 0022 22z"></path></svg>
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
