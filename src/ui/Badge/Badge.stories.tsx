import {SbWrapper} from '../SbWrapper/SbWrapper';
import {Badge} from './Badge';
import {StoryObj} from '@storybook/react';

export default {
	title: 'UI/Badge',
	component: Badge,
};

type Props = StoryObj<typeof Badge>;

export const BadgeUI: Props = {
	args: {
		type: 'discount',
		value: 10,
		size: 'normal',
	},
	render: (args) => (
		<SbWrapper>
			<Badge {...args} />
		</SbWrapper>
	),
};
