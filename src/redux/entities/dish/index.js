import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishByRestaurantId } from "./thunks/get-dish-by-restaurant-id";

const entityAdapter = createEntityAdapter();

export const DishSlice = createSlice({
  name: 'dish',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(
      getDishByRestaurantId.fulfilled,
      (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      }
    ),
})