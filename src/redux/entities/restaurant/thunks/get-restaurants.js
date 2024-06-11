import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../selectors";
import { BASE_ENDPOINT } from "../../../../constants/endpoints";

export const getRestaurants = createAsyncThunk(
  "restaurant/getRestaurants",
  async () => {
    const response = await fetch(`${BASE_ENDPOINT}/restaurants`);

    return response.json();
  },
  {
    condition: ({ forceRefetch = false } = {}, { getState }) =>
      forceRefetch || !selectRestaurantIds(getState())?.length,
  }
);
