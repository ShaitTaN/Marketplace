import {SbWrapper} from '../SbWrapper/SbWrapper';
import {Avatar} from './Avatar';
import {StoryObj} from '@storybook/react';

export default {
	title: 'UI/Avatar',
	component: Avatar,
};

type Props = StoryObj<typeof Avatar>;

export const AvatarUI: Props = {
	args: {
		avatarType: 'bordered',
		avatarSize: 'medium',
	},
	render: (args) => (
		<SbWrapper>
			<Avatar {...args} />
		</SbWrapper>
	),
};
