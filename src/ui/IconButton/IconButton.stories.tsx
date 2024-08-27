import {StoryObj} from '@storybook/react';
import {IconButton} from './IconButton';
import ArrowLeft from '../../assets/icons/basket.svg';
import {SbWrapper} from '../SbWrapper/SbWrapper';

export default {
	title: 'UI/IconButton',
	component: IconButton,
};

type Props = StoryObj<typeof IconButton>;

export const IconButtonUI: Props = {
	args: {
		icon: <ArrowLeft />,
	},
	render: (args) => (
		<SbWrapper>
			<IconButton {...args} />
		</SbWrapper>
	),
};
