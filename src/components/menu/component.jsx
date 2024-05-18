/* eslint-disable react/jsx-key */
import { MenuItem } from '../menuItem/component';

export const Menu = ({ menu }) => {
	return (
		<ul>
			{menu.map((item) => (
				<li>
					<MenuItem item={item} />
				</li>
			))}
		</ul>
	);
};