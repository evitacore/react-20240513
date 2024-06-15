import { useCallback } from "react";
import { useCreateReviewMutation } from "../../redux/service/api";
import { ReviewForm } from "../review-form/component";

export const NewReviewFormContainer = ({ restaurantId }) => {
  const [createReview] = useCreateReviewMutation();

  const handleSave = useCallback((form) => {
    createReview({
      restaurantId,
      newReview: {
        ...form,
        userId: "c3d4abd4-c3ef-46e1-8719-eb17db1d6e99",
      },
    });
  }, [createReview, restaurantId]);

  return (
    <div>
      <ReviewForm onSaveClick={handleSave}></ReviewForm>
    </div>
  );
};
