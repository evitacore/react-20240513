/* eslint-disable react/jsx-key */
export const Rating = ({ rating, onClickRating, size=5 } = {}) => {
  return (
    <div>
      {[...new Array(size)].map((_, index) => {
        const value = index + 1;

        return (
          <button type='button' disabled={rating === value} onClick={onClickRating}>
            {value}
          </button>
        );
      })}
    </div>
  );
};
