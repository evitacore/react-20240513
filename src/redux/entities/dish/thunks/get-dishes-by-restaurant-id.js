import { createAsyncThunk } from "@reduxjs/toolkit";
// import { selectDishIds } from "../selectors";
// import { selectRestaurantDishIds } from "../../restaurant/selectors";
import { BASE_ENDPOINT } from "../../../../constants/endpoints";

export const getDishesByRestaurantId = createAsyncThunk(
  "dish/getDishesByRestaurantId",
  async (restaurantId) => {
    const response = await fetch(`${BASE_ENDPOINT}/dishes?restaurantId=${restaurantId}`);

    return response.json();
  },
  // {condition: (restaurantId, {getState}) => {
  //   const state = getState();
  //   const loadedDishesIds = selectDishIds(state);
  //   const restaurantDishesIds = selectRestaurantDishIds(state, restaurantId);

  //   return restaurantDishesIds.some((id) => !loadedDishesIds.includes(id));
  // }}
);
