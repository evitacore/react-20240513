import { useDispatch } from "react-redux";
import { ThemeContextProvider } from "./contexts/theme/provider";
import { UserContextProvider } from "./contexts/user/provider";
import { Layout } from "./components/layout/component";
import { Restaurants } from "./components/restaurants/component";
import { useEffect } from "react";
import { getRestaurants } from "./redux/entities/restaurant/thunks/get-restaurants";
import { getUsers } from "./redux/entities/user/thunks/get-users";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants())
    dispatch(getUsers())
  }, [dispatch])

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