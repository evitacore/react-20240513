import { ThemeContextProvider } from "./contexts/theme/provider";
import { UserContextProvider } from "./contexts/user/provider";
import { Layout } from "./components/layout/component";
import { Restaurants } from "./components/restaurants/component";

export const App = () => {
  return (
      <ThemeContextProvider>
        <UserContextProvider>
          <Layout>
            <Restaurants />
          </Layout>
        </UserContextProvider>
      </ThemeContextProvider>
  );
};