import { ChangeEvent } from "react";
import { DishType } from "./dish";
import { ReviewType } from "./review";
import { SliceSchema } from "./slice";

export type RestaurantType = {
  id: string;
  name: string;
  description: string;
  img: string;
  menu: DishType[];
  reviews?: ReviewType[];
};

export type RestaurantProps = {
  restaurants: RestaurantType[];
  searchValue: string;
  onSearchValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type RestaurantSchema = SliceSchema<RestaurantType>;
