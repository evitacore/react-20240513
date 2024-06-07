import { Button } from "../button/component";
import { useTheme } from "../../contexts/theme/hooks";

export const ThemeToggler = () => {
  const { toggleTheme } = useTheme();

  return <Button onClick={toggleTheme}>Toggle Theme</Button>;
};