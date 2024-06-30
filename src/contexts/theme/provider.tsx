import { FC, PropsWithChildren, useMemo, useState } from "react";
import { ThemeContext, ThemeSetterContext } from "./context";
import { THEMES } from "./constants";

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(THEMES.default);

  const setterContextValue = useMemo(
    () => ({
      toggleTheme: () =>
        setTheme(
          theme === THEMES.default ? THEMES.alternative : THEMES.default
        ),
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeSetterContext.Provider value={setterContextValue}>
        {children}
      </ThemeSetterContext.Provider>
    </ThemeContext.Provider>
  );
};
