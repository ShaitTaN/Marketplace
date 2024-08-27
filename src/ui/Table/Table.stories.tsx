import {StoryObj} from '@storybook/react';
import {SbWrapper} from '../SbWrapper/SbWrapper';
import {Table} from '../Table/Table';

export default {
	title: 'UI/Table',
	component: Table,
};

type Props = StoryObj<typeof Table>;

export const TableUI: Props = {
	args: {
		data: [
			{
				name: 'Книга 1',
				author: 'Автор 1',
				publisher: 'Издательство 1',
			},
			{
				name: 'Книга 2',
				author: 'Автор 2',
				publisher: 'Издательство 2',
			},
			{
				name: 'Книга 3',
				author: 'Автор 3',
				publisher: 'Издательство 3',
			},
		],
		rowHeaders: ['Название', 'Автор', 'Издательство'],
	},
	render: (args) => {
		return (
			<SbWrapper>
				<Table {...args} />
			</SbWrapper>
		);
	},
};
