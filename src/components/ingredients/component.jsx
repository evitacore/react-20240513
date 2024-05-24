export const Ingredients = ({ ingredients }) => {
  return <div>
    <span>Ingredients: </span>
    <span>{ingredients.join(', ')}</span>
  </div>;
};