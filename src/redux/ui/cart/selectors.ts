import { StoreSchema } from "../../../types/store";

export const selectCartModule = (state: StoreSchema) => state.cart;

export const selectDishCount = (state: StoreSchema, id: string) =>
  selectCartModule(state)[id] || 0;

export const selectCartCount = (state: StoreSchema) =>
  Object.values(selectCartModule(state)).reduce((sum, count) => sum + count, 0);
