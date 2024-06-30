import { RestaurantSchema } from "./restaurant";
import { DishSchema } from "./dish";
import { ReviewSchema } from "./review";
import { UserSchema } from "./user";
import { apiService } from "../redux/service/api";
import { RequestState } from "./request";

export type StoreSchema = {
  dish: DishSchema;
  restaurant: RestaurantSchema;
  review: ReviewSchema;
  user: UserSchema;
  cart: Record<string, number>;
  request: RequestState;
  [apiService.reducerPath]: ReturnType<typeof apiService.reducer>;
};
