import { Layout } from "./components/layout/component";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { HomePage } from "./pages/home";
import { RestaurantsPage } from "./pages/restaurants";
import { RestaurantContainer } from "./components/restaurant/container";
import { MenuContainer } from "./components/menu/container";
import { ReviewsContainer } from "./components/reviews/container";
import { DishPage } from "./pages/dish";
import { RestaurantCardsContainer } from "./components/restaurant-cards/container";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/dish/:dishId", element: <DishPage /> },
      {
        path: "/restaurants",
        element: <RestaurantsPage />,
        children: [
          { index: true, element: <RestaurantCardsContainer /> },
          {
            path: ":restaurantId",
            element: <RestaurantContainer />,
            children: [
              { index: true, element: <Navigate to="menu" replace /> },
              { path: "menu", element: <MenuContainer /> },
              { path: "reviews", element: <ReviewsContainer /> },
            ],
          },
        ],
      },
      { path: "/login", element: <Navigate to="/restaurants" replace /> },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
