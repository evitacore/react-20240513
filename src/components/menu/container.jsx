import { Menu } from "./component";
import { useGetDishesByRestaurantIdQuery } from "../../redux/service/api";

export const MenuContainer = ({ restaurantId }) => {
  const { data: dishes, refetch } = useGetDishesByRestaurantIdQuery(restaurantId);

  if (!dishes?.length) {
    return null;
  }

  return <Menu dishes={dishes} onRefreshClick={refetch}  />;
};
