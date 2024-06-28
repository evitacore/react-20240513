import { Menu } from "./component";
import { useGetDishesByRestaurantIdQuery } from "../../redux/service/api";
import { useParams } from "react-router-dom";

export const MenuContainer = () => {
  const { restaurantId } = useParams<{restaurantId: string}>();

  if (!restaurantId) {
    return null;
  }
  
  const { data: dishes } = useGetDishesByRestaurantIdQuery(restaurantId);

  if (!dishes?.length) {
    return null;
  }

  return <Menu dishes={dishes} />;
};
