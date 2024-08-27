import {StoryObj} from '@storybook/react';
import {CartCounter} from './CartCounter';
import {SbWrapper} from '../SbWrapper/SbWrapper';

export default {
	title: 'UI/CartCounter',
	component: CartCounter,
};

type Props = StoryObj<typeof CartCounter>;

export const CartCounterUI: Props = {
	args: {
		value: 1,
	},
	render: (args) => {
		return (
			<SbWrapper>
				<CartCounter {...args} />
			</SbWrapper>
		);
	},
};
