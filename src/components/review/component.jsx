import styles from "./styles.module.scss";
import { StarsRating } from "../stars-rating/component";

export const Review = ({ user, review }) => {
  const { rating, text } = review;

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <span>{user.name}</span>
        <StarsRating rating={rating} />
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};
