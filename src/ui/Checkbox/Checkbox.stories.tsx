import {StoryObj} from '@storybook/react';
import {Checkbox} from './Checkbox';
import {useArgs} from '@storybook/preview-api';
import {SbWrapper} from '../SbWrapper/SbWrapper';

export default {
	title: 'UI/Checkbox',
	component: Checkbox,
};

type Props = StoryObj<typeof Checkbox>;

export const CheckboxUI: Props = {
	args: {
		size: 'normal',
		checked: false,
	},
	render: (args) => {
		const [{checked}, updateArgs] = useArgs();
		const onChange = () => {
			updateArgs({checked: !checked});
		};
		return (
			<SbWrapper>
				<Checkbox {...args} onChange={onChange} checked={checked} />
			</SbWrapper>
		);
	},
};
