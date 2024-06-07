/* eslint-disable react/jsx-key */
import { DishContainer } from '../dish/container';

export const Menu = ({ dishIds }) => {
	return (
		<div>
			<h3>Menu</h3>
      <div>
        {dishIds.map((id) => (
          <DishContainer id={id} />
        ))}
      </div>
		</div>
	);
};