import { Layout } from "./components/layout/component";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { HomePage } from "./pages/home";
import { RestaurantsPage } from "./pages/restaurants";
import { DishPage } from "./pages/dish";
import { RestaurantContainer } from "./components/restaurant/container";
import { MenuContainer } from "./components/menu/container";
import { ReviewsContainer } from "./components/reviews/container";
import { DishContainer } from "./components/dish/container";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "restaurants",
        element: <RestaurantsPage />,
        children: [
          {
            path: ":restaurantId",  
            element: <RestaurantContainer />,
            children: [
              { index: true, element: <MenuContainer /> },
              { path: "menu", element: <MenuContainer /> },
              { path: "reviews", element: <ReviewsContainer /> },
            ],
          },
        ],
      },
      {
        path: "dish",
        element: <DishPage />,
        children: [{ path: ":dishId", element: <DishContainer /> }],
      },
      { path: "login", element: <Navigate to="/restaurants" replace /> },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
