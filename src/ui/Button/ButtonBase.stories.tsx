import {StoryObj} from '@storybook/react';
import {ButtonBase} from './ButtonBase';
import HeartIcon from '../../assets/icons/heartNormal.svg';
import HeartBigIcon from '../../assets/icons/heartLarge.svg';
import {SbWrapper} from '../SbWrapper/SbWrapper';
import {Flex, Typography} from 'antd';

export default {
	title: 'UI/Button',
	component: ButtonBase,
};

const icons = {
	HeartIcon: <HeartIcon />,
	HeartBigIcon: <HeartBigIcon />,
	Null: null,
};

type Props = StoryObj<typeof ButtonBase>;

export const ButtonBaseUI: Props = {
	args: {
		children: 'Кнопка',
		buttonType: 'primary',
		buttonSize: 'normal',
		width: '',
		iconLeft: null,
		iconRight: null,
	},
	render: (args) => (
		<SbWrapper vertical gap={12}>
			<Flex gap={12} align='center'>
				Default:
				<ButtonBase id='def' {...args} />
			</Flex>
			<Flex gap={12} align='center'>
				Active:
				<ButtonBase id='active' {...args} />
			</Flex>
			<Flex gap={12} align='center'>
				Hover:
				<ButtonBase id='hover' {...args} />
			</Flex>
			<Flex gap={12} align='center'>
				Focus:
				<ButtonBase id='focus' {...args} />
			</Flex>
			<Flex gap={12} align='center'>
				<Typography.Text>Disabled:</Typography.Text>
				<ButtonBase id='disabled' disabled {...args} />
			</Flex>
		</SbWrapper>
	),
};

ButtonBaseUI.argTypes = {
	iconLeft: {
		options: Object.keys(icons),
		control: {
			type: 'select',
			labels: {
				HeartIcon: 'Heart',
				HeartBigIcon: 'HeartBig',
				Null: 'Без иконки',
			},
		},
		table: {
			type: {summary: 'select'},
			defaultValue: {summary: 'Без иконки'},
		},
		mapping: icons,
	},
	iconRight: {
		options: Object.keys(icons),
		control: {
			type: 'select',
			labels: {
				HeartIcon: 'Heart',
				HeartBigIcon: 'HeartBig',
				Null: 'Без иконки',
			},
		},
		table: {
			type: {summary: 'select'},
			defaultValue: {summary: 'Без иконки'},
		},
		mapping: icons,
	},
};
ButtonBaseUI.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/nIWj49BK67U3MUiTVa7VFF/Site-for-user-%5BLysende%5D?type=design&node-id=391-15653&mode=dev',
	},
	pseudo: {
		hover: ['#hover'],
		focus: ['#focus'],
		active: ['#active'],
	},
};
