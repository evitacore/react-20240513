import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDishByRestaurantId = createAsyncThunk(
  "dish/getDishByRestaurantId",
  async (restaurantId) => {
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);

    return response.json();
  }
);
