import { FC, useCallback, useMemo } from "react";
import { useUpdateReviewMutation } from "../../redux/service/api";
import { ReviewForm } from "../review-form/component";
import { ReviewFormData, ReviewType } from "../../types/review";

type UpdateReviewFormContainerProps = {
  review: ReviewType;
  onCancel: () => void;
  onSave: any;
};

export const UpdateReviewFormContainer: FC<UpdateReviewFormContainerProps> = ({
  review,
  onCancel,
  onSave,
}) => {
  const { text, rating } = review;
  const [updateReview] = useUpdateReviewMutation();

  const handleSave = useCallback(
    (form: ReviewFormData) => {
      updateReview({
        ...review,
        ...form,
      });
      onSave();
    },
    [onSave, review, updateReview]
  );

  const formValue = useMemo(
    () => ({
      text: text,
      rating: rating,
    }),
    [rating, text]
  );

  return (
    <div>
      <ReviewForm
        initialValue={formValue}
        onSaveClick={handleSave}
        onCancelClick={onCancel}
      ></ReviewForm>
    </div>
  );
};
