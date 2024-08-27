import {StoryObj} from '@storybook/react';
import {Input} from './Input';
import {Flex} from 'antd';
import {SbWrapper} from '../SbWrapper/SbWrapper';

export default {
	title: 'UI/Input',
	component: Input,
};

type Props = StoryObj<typeof Input>;

export const InputUI: Props = {
	args: {
		placeholder: 'Placeholder',
		inputSize: 'normal',
	},
	render: (args) => (
		<SbWrapper>
			<Flex vertical gap={12}>
				<Input {...args} />
				<Input.Password {...args} />
				<Input.TextArea autoSize={{minRows: 6, maxRows: 8}} placeholder='Комментарий для курьера' />
			</Flex>
		</SbWrapper>
	),
};
