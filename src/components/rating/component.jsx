import { Button } from "../button/component";

/* eslint-disable react/jsx-key */
export const Rating = ({ rating, onChange, size=5 } = {}) => {
  return (
    <div>
      {[...new Array(size)].map((_, index) => {
        const value = index + 1;

        return (
          <Button 
            disabled={rating === value} 
            onClick={() => onChange(value)}
          >
            {value}
          </Button>
        );
      })}
    </div>
  );
};
