import { Dispatch, createContext } from "react";

type UserSetterContextProps = { login: Dispatch<any>; logout: () => void };

const defaultValue = { login: () => {}, logout: () => {} };

export const UserContext = createContext(null);
export const UserSetterContext =
  createContext<UserSetterContextProps>(defaultValue);
