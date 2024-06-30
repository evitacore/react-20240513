import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { RestaurantSlice } from "./entities/restaurant";
import { DishSlice } from "./entities/dish";
import { ReviewSlice } from "./entities/review";
import { UserSlice } from "./entities/user";
import { CartSlice } from "./ui/cart";
import { RequestSlice } from "./ui/request";
import { apiService } from "./service/api";
import { useDispatch } from "react-redux";

export type AppDispatch = typeof store.dispatch;

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

export const useAppDispatch = () => useDispatch<AppDispatch>();

// console.log(store.getState())
