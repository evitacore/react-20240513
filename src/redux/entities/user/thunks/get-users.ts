import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserIds } from "../selectors";
import { BASE_ENDPOINT } from "../../../../constants/endpoints";
import { UserType } from "../../../../types/user";
import { StoreSchema } from "../../../../types/store";

interface ConditionArgs {
  forceRefetch?: boolean;
}

export const getUsers = createAsyncThunk<
  UserType[],
  ConditionArgs,
  { state: StoreSchema }
>(
  "user/getUsers",
  async () => {
    const response = await fetch(`${BASE_ENDPOINT}/users`);

    return response.json();
  },
  {
    condition: ({ forceRefetch = false } = {}, { getState }) =>
      forceRefetch || !selectUserIds(getState())?.length,
  }
);
