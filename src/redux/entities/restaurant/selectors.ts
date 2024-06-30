import { StoreSchema } from "../../../types/store";

export const selectRestaurantModule = (state: StoreSchema) => state.restaurant;

export const selectRestaurantById = (state: StoreSchema, id: string) =>
  selectRestaurantModule(state).entities[id];

export const selectRestaurantIds = (state: StoreSchema) =>
  selectRestaurantModule(state).ids;

export const selectRestaurantReviewIds = (state: StoreSchema, id: string) =>
  selectRestaurantById(state, id)?.reviews;

export const selectRestaurantDishIds = (state: StoreSchema, id: string) =>
  selectRestaurantById(state, id)?.menu;

export const selectInitialRestaurant = (state: StoreSchema) =>
  selectRestaurantIds(state)[0];
