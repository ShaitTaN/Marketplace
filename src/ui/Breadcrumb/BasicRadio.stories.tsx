import {StoryObj} from '@storybook/react';
import {Breadcrumb} from './Breadcrumb';
import {SbWrapper} from '../SbWrapper/SbWrapper';

export default {
	title: 'UI/Breadcrumb',
	component: Breadcrumb,
};

type Props = StoryObj<typeof Breadcrumb>;

export const BreadcrumbUI: Props = {
	args: {
		items: [
			{
				title: <div>Главная</div>,
			},
			{
				title: <div>Женщинам</div>,
			},
			{
				title: <div>Блузы и рубашки</div>,
			},
		],
	},
	render: (args) => (
		<SbWrapper>
			<Breadcrumb {...args} />
		</SbWrapper>
	),
};
