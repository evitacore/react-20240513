import { StoreSchema } from "../../../types/store";

export const selectReviewModule = (state: StoreSchema) => state.review;

export const selectReviewById = (state: StoreSchema, id: string) =>
  selectReviewModule(state).entities[id];

export const selectReviewIds = (state: StoreSchema) =>
  selectReviewModule(state).ids;

// export const selectReviewUserId = (state: StoreSchema, id: string) => selectReviewById(state, id)?.userId;
