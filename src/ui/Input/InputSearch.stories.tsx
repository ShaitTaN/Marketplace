import {StoryObj} from '@storybook/react';
import {InputSearch} from './InputSearch';
import {useArgs} from '@storybook/preview-api';
import {SbWrapper} from '../SbWrapper/SbWrapper';

export default {
	title: 'UI/Input',
	component: InputSearch,
};

type Props = StoryObj<typeof InputSearch>;
const data = [
	{label: 'Мячковский б-р, 18к1'},
	{label: 'Мячковский б-р, 17'},
	{label: 'Мячковский б-р, 14'},
	{label: 'Мячковский б-р, 10к2'},
	{label: 'Тестирование'},
];

export const InputSearchUI: Props = {
	args: {
		data: data,
		inputSize: 'normal',
		placeholder: 'Найти адрес',
		value: '',
		checked: false,
	},
	render: (args) => {
		const [, updateArgs] = useArgs();
		const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			updateArgs({value: event.target.value});
		};
		return (
			<SbWrapper>
				<InputSearch onChange={(e) => onChange(e)} {...args} />
			</SbWrapper>
		);
	},
};
