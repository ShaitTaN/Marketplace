import {StoryObj} from '@storybook/react';
import {SbWrapper} from '../SbWrapper/SbWrapper';
import {Rate} from '../Rate/Rate';

export default {
	title: 'UI/Rate',
	component: Rate,
};

type Props = StoryObj<typeof Rate>;

export const RateUI: Props = {
	args: {
		sizeStars: 'normal',
	},
	render: (args) => {
		return (
			<SbWrapper>
				<Rate {...args} />
			</SbWrapper>
		);
	},
};
