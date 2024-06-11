import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { RestaurantSlice } from "./entities/restaurant";
import { DishSlice } from "./entities/dish";
import { ReviewSlice } from "./entities/review";
import { UserSlice } from "./entities/user";
import { CartSlice } from "./ui/cart";
import { RequestSlice } from "./ui/request";
import { apiService } from "./service/api";

export const store = configureStore({
  reducer: combineSlices(
    RestaurantSlice,
    DishSlice,
    ReviewSlice,
    UserSlice,
    CartSlice,
    RequestSlice,
    apiService
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
  devTools: import.meta.env.DEV,
});

// console.log(store.getState())
