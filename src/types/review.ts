import { SliceSchema } from "./slice";

export type ReviewType = {
  id: string;
  user: string;
  text: string;
  rating: number;
  userId?: string;
};

export type ReviewFormData = {
  userId: string;
  rating: number;
  text: string;
};

export interface ReviewProps {
  reviews: ReviewType[];
}

export type ReviewSchema = SliceSchema<ReviewType>;
