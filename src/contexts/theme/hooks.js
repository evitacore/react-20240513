import { useContext } from "react";
import { ThemeContext, ThemeSetterContext } from "./context";

export const useTheme = () => useContext(ThemeContext);
export const useThemeSetters = () => useContext(ThemeSetterContext);