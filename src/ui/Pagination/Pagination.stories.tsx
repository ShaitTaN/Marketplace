import {StoryObj} from '@storybook/react';
import {SbWrapper} from '../SbWrapper/SbWrapper';
import {Pagination} from './Pagination';

export default {
	title: 'UI/Pagination',
	component: Pagination,
};

type Props = StoryObj<typeof Pagination>;

export const PaginationUI: Props = {
	args: {},
	render: () => {
		return (
			<SbWrapper>
				<Pagination />
			</SbWrapper>
		);
	},
};
