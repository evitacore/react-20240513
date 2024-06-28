import { FC } from "react";
import styles from "./styles.module.scss";

type RatingProps = {
  rating: number;
  onChange: (value: number) => void;
  size?: number;
};

export const Rating: FC<RatingProps> = ({ rating, onChange, size = 5 }) => {
  return (
    <div>
      {[...new Array(size)].map((_, index) => {
        const value: number = index + 1;

        return (
          <button
            className={styles.button}
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
