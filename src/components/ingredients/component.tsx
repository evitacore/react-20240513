import { FC } from "react";

type IngredientsProps = {
  ingredients: string[];
};

export const Ingredients: FC<IngredientsProps> = ({ ingredients }) => {
  return (
    <div>
      <span>Ingredients: </span>
      <span>{ingredients.join(", ")}</span>
    </div>
  );
};
