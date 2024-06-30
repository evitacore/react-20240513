import { SliceSchema } from "./slice";

export type UserType = {
  id: string;
  name: string;
};

export type UserSchema = SliceSchema<UserType>;
