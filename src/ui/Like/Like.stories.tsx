import {StoryObj} from '@storybook/react';
import {Like} from './Like';
import {SbWrapper} from '../SbWrapper/SbWrapper';

export default {
	title: 'UI/Like',
	component: Like,
};

type Props = StoryObj<typeof Like>;

export const LikeUI: Props = {
	args: {
		isLikedProps: true,
		borderWhiteActive: false,
		heartSize: 'normal',
	},
	render: (args) => {
		return (
			<SbWrapper>
				<Like {...args} />
			</SbWrapper>
		);
	},
};
