import { Provider } from "react-redux";
import { ThemeContextProvider } from "./contexts/theme/provider";
import { UserContextProvider } from "./contexts/user/provider";
import { Layout } from "./components/layout/component";
import { Restaurants } from "./components/restaurants/component";
import { store } from "./redux";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          <Layout>
            <Restaurants />
          </Layout>
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};