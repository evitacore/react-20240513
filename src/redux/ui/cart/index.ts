import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState = Record<string, number>;

const addReducer: CaseReducer<CartState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state[payload] = (state[payload] || 0) + 1;
};

const removeReducer: CaseReducer<CartState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  if (state[payload] === undefined) {
    return;
  }

  state[payload] = state[payload] - 1;
  if (state[payload] <= 0) {
    delete state[payload];
  }
};

export const CartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    increment: addReducer,
    decrement: removeReducer,
    clear: () => {
      return {};
    },
  },
});

export const { increment, decrement, clear } = CartSlice.actions;
