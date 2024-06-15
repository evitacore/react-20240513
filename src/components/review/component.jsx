import styles from "./styles.module.scss";
import { StarsRating } from "../stars-rating/component";
import { Button } from "../button/component";
import { useCallback, useState } from "react";
import { UpdateReviewFormContainer } from "../update-review-form/container";

export const Review = ({ user, review }) => {
  const [isEditModeOn, setIsEditModeOn] = useState(false);
  const { rating, text } = review;

  const switchEditMode = useCallback(
    () => setIsEditModeOn((isOn) => !isOn),
    []
  );

  if (!review) {
    return;
  }

  return (
    <div className={styles.root}>
      {isEditModeOn ? (
        <UpdateReviewFormContainer
          review={review}
          onSave={switchEditMode}
          onCancel={switchEditMode}
        />
      ) : (
        <>
          <div className={styles.header}>
            <span>{user.name}</span>
            <StarsRating rating={rating} />
          </div>
          <div className={styles.text}>{text}</div>
          <Button onClick={switchEditMode}>Edit</Button>
        </>
      )}
    </div>
  );
};
