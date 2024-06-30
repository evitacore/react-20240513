import { FC, useCallback } from "react";
import { useCreateReviewMutation } from "../../redux/service/api";
import { ReviewForm } from "../review-form/component";

type NewReviewFormContainerProps = {
  restaurantId: string;
};

type ReviewFormData = {
  rating: number;
  text: string;
};

export const NewReviewFormContainer: FC<NewReviewFormContainerProps> = ({
  restaurantId,
}) => {
  const [createReview] = useCreateReviewMutation();

  const handleSave = useCallback(
    (form: ReviewFormData) => {
      createReview({
        restaurantId,
        newReview: {
          ...form,
        },
      });
    },
    [createReview, restaurantId]
  );

  return (
    <div>
      <ReviewForm onSaveClick={handleSave}></ReviewForm>
    </div>
  );
};
