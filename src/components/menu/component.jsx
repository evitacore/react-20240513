/* eslint-disable react/jsx-key */
import { Button } from '../button/component';
import { DishContainer } from '../dish/container';

export const Menu = ({ dishes, onRefreshClick }) => {
	return (
		<div>
			<h3>Menu</h3>
      <Button onClick={onRefreshClick}>Refresh</Button>
      <div>
        {dishes.map((dish) => (
          <DishContainer dish={dish} />
        ))}
      </div>
		</div>
	);
};