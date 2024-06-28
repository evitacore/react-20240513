import { Action, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "./constants";
import { RequestState, PendingAction, RejectedAction, FulfilledAction } from "../../../types/request";

const initialState: RequestState = {};

export const RequestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addMatcher(
        (action: Action): action is PendingAction => action.type.endsWith("/pending"),
        (state, { meta }) => {
          state[meta.requestId] = {
            status: REQUEST_STATUS.pending,
          };
        }
      )
      .addMatcher(
        (action: Action): action is RejectedAction => action.type.endsWith("/rejected"),
        (state, { meta, error }) => {
          state[meta.requestId] = {
            status: REQUEST_STATUS.rejected,
            error,
          };
        }
      )
      .addMatcher(
        (action: Action): action is FulfilledAction => action.type.endsWith("/fulfilled"),
        (state, { meta }) => {
          state[meta.requestId] = {
            status: REQUEST_STATUS.fulfilled,
          };
        }
      ),
});
