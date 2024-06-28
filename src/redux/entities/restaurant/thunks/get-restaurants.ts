import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../selectors";
import { BASE_ENDPOINT } from "../../../../constants/endpoints";
import { RestaurantType } from "../../../../types/restaurant";
import { StoreSchema } from "../../../../types/store";

interface ConditionArgs {
  forceRefetch?: boolean;
}

export const getRestaurants = createAsyncThunk<
  RestaurantType[],
  ConditionArgs,
  { state: StoreSchema }
>(
  "restaurant/getRestaurants",
  async () => {
    const response = await fetch(`${BASE_ENDPOINT}/restaurants`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },
  {
    condition: ({ forceRefetch = false }: ConditionArgs = {}, { getState }) =>
      forceRefetch || !selectRestaurantIds(getState())?.length,
  }
);
