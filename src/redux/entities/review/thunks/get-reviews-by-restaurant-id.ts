import { createAsyncThunk } from "@reduxjs/toolkit";
// import { selectReviewIds } from "../selectors";
// import { selectRestaurantReviewIds } from "../../restaurant/selectors";
import { BASE_ENDPOINT } from "../../../../constants/endpoints";
import { ReviewSchema } from "../../../../types/review";

export const getReviewsByRestaurantId = createAsyncThunk(
  "review/getReviewsByRestaurantId",
  async (restaurantId) => {
    const response = await fetch(`${BASE_ENDPOINT}/reviews?restaurantId=${restaurantId}`);
    
    return response.json();
  },
  // {condition: (restaurantId, {getState}) => {
  //   const state = getState();
  //   const loadedReviewIds = selectReviewIds(state);
  //   const restaurantReviewIds = selectRestaurantReviewIds(state, restaurantId);

  //   return restaurantReviewIds.some((id) => !loadedReviewIds.includes(id));
  // }}
);
