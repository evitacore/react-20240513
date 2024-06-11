import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { RestaurantSlice } from "./entities/restaurant";
import { DishSlice } from "./entities/dish";
import { ReviewSlice } from "./entities/review";
import { UserSlice } from "./entities/user";
import { CartSlice } from "./ui/cart";

export const store = configureStore({
  reducer: combineSlices(
    RestaurantSlice,
    DishSlice,
    ReviewSlice,
    UserSlice,
    CartSlice
  ),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// console.log(store.getState())
