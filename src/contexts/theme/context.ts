import { createContext } from "react";

type ThemeSetterContextProps = {
  toggleTheme: () => void;
};

const defaultValue = { toggleTheme: () => {} };

export const ThemeContext = createContext<string>("default");
export const ThemeSetterContext =
  createContext<ThemeSetterContextProps>(defaultValue);
