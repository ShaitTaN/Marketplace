import {StoryObj} from '@storybook/react';
import {SbWrapper} from '../SbWrapper/SbWrapper';
import {Tabs} from '../Tabs/Tabs';

export default {
	title: 'UI/Tabs',
	component: Tabs,
};

type Props = StoryObj<typeof Tabs>;

export const TabsUI: Props = {
	args: {
		defaultActiveKey: '1',
		items: [
			{
				label: 'Вопрос или ответ не по теме изделия',
				key: '1',
			},
			{
				label: 'Нецензурная лексика',
				key: '2',
			}
		],
		isTabLarge: true,
		isTabModal: true,
		tabBarGutter: 0,
    type: 'card',
    centered: true,
	},
	render: (args) => {
		return (
			<SbWrapper>
				<Tabs {...args} />
			</SbWrapper>
		);
	},
};
