import { Button } from "../button/component";
import { useThemeSetters } from "../../contexts/theme/hooks";

export const ThemeToggler = () => {
  const { toggleTheme } = useThemeSetters();

  return <Button onClick={toggleTheme}>Toggle Theme</Button>;
};