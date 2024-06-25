import styles from './styles.module.scss'

export const Rating = ({ rating, onChange, size = 5 } = {}) => {
  return (
    <div>
      {[...new Array(size)].map((_, index) => {
        const value = index + 1;

        return (
          <button className={styles.button}
            key={index}
            disabled={rating === value}
            onClick={() => onChange(value)}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
};
