import {Flex, Typography} from 'antd';
import {Modal} from '../../../../ui/Modal/Modal';
import {Table} from '../../../../ui/Table/Table';
import classes from './styles.module.scss';

interface Props {
	open: boolean;
	onClose: () => void;
}

const rowHeaders = [
	'Российский размер RU',
	'Международный размер INT',
	'Объём груди, см',
	'Объём талии, см',
	'Объём бёдер, см',
];

const data = [
	{
		ru: '36',
		int: '3XS',
		bustVolume: '70-75',
		waist: '53-57',
		hipVolume: '80-82',
	},
	{
		ru: '38',
		int: 'XXS',
		bustVolume: '76-80',
		waist: '58-62',
		hipVolume: '83-86',
	},
	{
		ru: '40',
		int: 'XS',
		bustVolume: '81-83',
		waist: '63-65',
		hipVolume: '86-88',
	},
	{
		ru: '42',
		int: 'S',
		bustVolume: '84-87',
		waist: '66-69',
		hipVolume: '89-93',
	},
	{
		ru: '44',
		int: 'M',
		bustVolume: '88-92',
		waist: '70-74',
		hipVolume: '94-98',
	},
	{
		ru: '46',
		int: 'L',
		bustVolume: '93-97',
		waist: '75-78',
		hipVolume: '99-102',
	},
	{
		ru: '48',
		int: 'XL',
		bustVolume: '98-102',
		waist: '79-82',
		hipVolume: '103-106',
	},
	{
		ru: '50',
		int: '2XL',
		bustVolume: '103-106',
		waist: '83-86',
		hipVolume: '107-110',
	},
];

export const TableSizesModal = ({open, onClose}: Props) => {
	return (
		<Modal open={open} onCancel={onClose} footer={null} width={'902px'} centered>
			<Flex vertical gap={24} style={{padding: '24px'}} className={classes.wrapper}>
				<Typography className={classes.title}>Таблица размеров</Typography>
				<div style={{width: '854px', overflow: 'auto'}}>
					<Table rowHeaders={rowHeaders} data={data} />
				</div>
			</Flex>
		</Modal>
	);
};
