import { REQUEST_STATUS } from "./constants";
import { StoreSchema } from "../../../types/store";

export const selectRequestModule = (state: StoreSchema) => state.request;

export const selectRequestById = (state: StoreSchema, requestId: string) =>
  selectRequestModule(state)[requestId];

export const selectRequestStatus = (state: StoreSchema, requestId: string) =>
  selectRequestById(state, requestId)?.status || REQUEST_STATUS.idle;

export const selectRequestError = (state: StoreSchema, requestId: string) =>
    selectRequestById(state, requestId)?.error;