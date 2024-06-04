/* eslint-disable react/jsx-key */
import { Dish } from '../dish/component';

export const Menu = ({ dishIds }) => {
	return (
		<div>
			<h3>Menu</h3>
      <div>
        {dishIds.map((id) => (
          <Dish dishId={id} />
        ))}
      </div>
		</div>
	);
};