import { FC, useCallback } from "react";
import { useCreateReviewMutation } from "../../redux/service/api";
import { ReviewForm } from "../review-form/component";

type NewReviewFormContainerProps = {
  restaurantId: string;
};

type ReviewFormData = {
  userId: string;
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
          userId: "c3d4abd4-c3ef-46e1-8719-eb17db1d6e99",
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
