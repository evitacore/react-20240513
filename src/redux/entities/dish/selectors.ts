import { StoreSchema } from "../../../types/store";

export const selectDishModule = (state: StoreSchema) => state.dish;

export const selectDishById = (state: StoreSchema, id: string) =>
  selectDishModule(state).entities[id];

export const selectDishIds = (state: StoreSchema) => selectDishModule(state).ids;