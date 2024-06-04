import { ThemeContextProvider } from "./components/contexts/theme/provider";
import { UserContextProvider } from "./components/contexts/user/provider";
import { Layout } from "./components/layout/component";
import { Restaurants } from "./components/restaurants/component";
import { restaurants } from "./constants/mock";

export const App = () => {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <Layout>
          <Restaurants restaurants={restaurants} />
        </Layout>
      </UserContextProvider>
    </ThemeContextProvider>
  );
};