import {StoryObj} from '@storybook/react';
import {SbWrapper} from '../SbWrapper/SbWrapper';
import {BasicCounter} from './BasicCounter';

export default {
	title: 'UI/BasicCounter',
	component: BasicCounter,
};

type Props = StoryObj<typeof BasicCounter>;

export const BasicCounterUI: Props = {
	args: {
		value: 1,
	},
	render: (args) => {
		return (
			<SbWrapper>
				<BasicCounter {...args} />
			</SbWrapper>
		);
	},
};
