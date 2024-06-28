import { SliceSchema } from "./slice";

export interface DishType {
  name: string;
  price: number;
  ingredients: string[];
  id: string;
}

export interface DishProps {
  dish: DishType;
  count: number;
  decrement: () => void;
  increment: () => void;
}

export type DishSchema = SliceSchema<DishType>;
