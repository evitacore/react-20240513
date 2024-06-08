import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selectors";
import { selectRestaurantDishIds } from "../../restaurant/selectors";

export const getDishByRestaurantId = createAsyncThunk(
  "dish/getDishByRestaurantId",
  async (restaurantId) => {
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);

    return response.json();
  },
  {condition: (restaurantId, {getState}) => {
    const state = getState();
    const loadedReviewIds = selectDishIds(state);
    const restaurantReviewIds = selectRestaurantDishIds(state, restaurantId);

    return restaurantReviewIds.some((id) => !loadedReviewIds.includes(id));
  }}
);
