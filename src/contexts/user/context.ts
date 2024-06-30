import { Dispatch, createContext } from "react";
import { Nullable } from "../../types/nullable";

type UserSetterContextProps = {
  login: (user: string) => void;
  logout: () => void;
};

export type UserContextProps = {
  user: Nullable<string>;
  setUser?: (user: Nullable<string>) => void;
};

const defaultValue = { login: () => {}, logout: () => {} };

export const UserContext = createContext<UserContextProps>({ user: null });
export const UserSetterContext =
  createContext<UserSetterContextProps>(defaultValue);
