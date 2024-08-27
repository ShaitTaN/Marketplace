import {StoryObj} from '@storybook/react';
import {Link} from './Link';
import {SbWrapper} from '../SbWrapper/SbWrapper';
import {Flex} from 'antd';

export default {
	title: 'UI/Link',
	component: Link,
};

type Props = StoryObj<typeof Link>;

export const LinkUI: Props = {
	args: {
		to: '/',
		type: 'primary',
		size: 'normal',
		component: 'button',
		children: 'Link',
	},
	render: (args) => {
		return (
			<SbWrapper vertical gap={12}>
				<Flex gap={12} align='center'>
					Default:
					<Link id='def' {...args} />
				</Flex>
				<Flex gap={12} align='center'>
					Active:
					<Link id='active' {...args} />
				</Flex>
				<Flex gap={12} align='center'>
					Hover:
					<Link id='hover' {...args} />
				</Flex>
				<Flex gap={12} align='center'>
					Focus:
					<Link id='focus' {...args} />
				</Flex>
				<Flex gap={12} align='center'>
					Disabled:
					<Link id='disabled' disabled {...args} />
				</Flex>
			</SbWrapper>
		);
	},
};

LinkUI.parameters = {
	pseudo: {
		hover: ['#hover'],
		focus: ['#focus'],
		active: ['#active'],
	},
};
