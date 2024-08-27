import {StoryObj} from '@storybook/react';
import {Dropdown} from './Dropdown';
import {MenuProps} from 'antd';
import {SbWrapper} from '../SbWrapper/SbWrapper';

export default {
	title: 'UI/Dropdown',
	component: Dropdown,
};

type Props = StoryObj<typeof Dropdown>;
const items: MenuProps['items'] = [
	{
		key: 'openModal',
		label: 'Пожаловаться',
	},
];

export const DropdownUI: Props = {
	args: {
		trigger: ['click'],
		placement: 'bottomLeft',
		menu: {
			items,
			onClick: ({key}) => {
				console.log(key);
			},
		},
	},
	render: (args) => {
		return (
			<SbWrapper>
				<Dropdown {...args} />
			</SbWrapper>
		);
	},
};
