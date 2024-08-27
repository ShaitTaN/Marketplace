import {StoryObj} from '@storybook/react';
import {BasicRadio} from './BasicRadio';
import {SbWrapper} from '../SbWrapper/SbWrapper';

export default {
	title: 'UI/BasicRadio',
	component: BasicRadio,
};

type Props = StoryObj<typeof BasicRadio>;

export const BasicRadioUI: Props = {
	args: {
		value: 'value',
	},
	render: (args) => (
		<SbWrapper>
			<BasicRadio {...args} />
		</SbWrapper>
	),
};
