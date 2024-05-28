export const Rating = ({ value, onClickRating, min=1, max=5 } = {}) => {
  let buttons = [];
  for (let i = min; i <= max; i++) {
    buttons.push(<button onClick={onClickRating} disabled={value === i}>{i}</button>);
  }

  return <div>
    <div>{buttons}</div>
  </div>;
};
