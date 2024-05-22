/* eslint-disable react/jsx-key */
import { Dish } from '../dish/component';

export const Menu = ({ menu }) => {
	return (
		<ul>
			{menu.map((item) => (
				<li>
					<Dish item={item} />
				</li>
			))}
		</ul>
	);
};