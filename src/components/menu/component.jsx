/* eslint-disable react/jsx-key */
import { Button } from '../button/component';
import { DishContainer } from '../dish/container';

export const Menu = ({ dishIds, onRefreshClick }) => {
	return (
		<div>
			<h3>Menu</h3>
      <Button onClick={onRefreshClick}>Refresh</Button>
      <div>
        {dishIds.map((id) => (
          <DishContainer id={id} />
        ))}
      </div>
		</div>
	);
};