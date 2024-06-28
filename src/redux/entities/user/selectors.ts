import { StoreSchema } from "../../../types/store";

export const selectUserModule = (state: StoreSchema) => state.user;

export const selectUserById = (state: StoreSchema, id: string) =>
  selectUserModule(state).entities[id];

export const selectUserIds = (state: StoreSchema) =>
  selectUserModule(state).ids;
