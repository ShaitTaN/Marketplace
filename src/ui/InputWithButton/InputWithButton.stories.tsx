import {StoryObj} from '@storybook/react';
import {InputWithButton} from './InputWithButton';
import SearchIcon from '../../assets/icons/search.svg';
import {SbWrapper} from '../SbWrapper/SbWrapper';

export default {
	title: 'UI/Input',
	component: InputWithButton,
};

const icons = {
	Icon: '🔍',
	Search: <SearchIcon />,
};

type Props = StoryObj<typeof InputWithButton>;

export const InputWithButtonUI: Props = {
	args: {
		typeInpWithBtn: 'search',
		icon: icons.Search,
		placeholder: 'Напишите сообщение',
		width: 300,
	},
	render: (args) => {
		return (
			<SbWrapper>
				<InputWithButton {...args} />
			</SbWrapper>
		);
	},
};

InputWithButtonUI.argTypes = {
	icon: {
		options: Object.keys(icons),
		control: {
			type: 'select',
			labels: {
				Search: 'Поиск',
				Icon: 'Иконка',
			},
		},
		table: {
			type: {summary: 'select'},
			defaultValue: {summary: 'Поиск'},
		},
		mapping: icons,
	},
};
