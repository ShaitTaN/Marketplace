import {Flex, Typography} from 'antd';
import classes from './styles.module.scss';
import clsx from 'clsx';
import {ChecksCard} from '../../app/models/ChecksCard';
import {LayoutWithContent} from './components/LayoutWithContent';
import {LayoutWithoutContent} from './components/LayoutWithoutContent';

const checksData: ChecksCard[] = [
	{
		order: 'Заказ №25660751-0029',
		brandName: 'Brand Name',
		date: '12 марта 2024 в 17:12',
		price: 1300,
	},
	{
		order: 'Заказ №25660751-0029',
		brandName: 'Brand Name',
		date: '5 марта 2024 в 09:56',
		price: 54600,
	},
	{
		order: 'Заказ №25660751-0029',
		brandName: 'Brand Name',
		date: '1 марта 2024 в 23:18',
		price: 800,
	},
	{
		order: 'Заказ №25660751-0029',
		brandName: 'Brand Name',
		date: '25 февраля 2024 в 13:08',
		price: 130500,
	},
	{
		order: 'Заказ №25660751-0029',
		brandName: 'Brand Name',
		date: '7 января 2024 в 12:04',
		price: 1000000,
	},
	{
		order: 'Заказ №25660751-0029',
		brandName: 'Brand Name',
		date: '6 января 2024 в 17:45',
		price: 13650,
	},
	{
		order: 'Заказ №25660751-0029',
		brandName: 'Brand Name',
		date: '23 декабря 2024 в 06:13',
		price: 1500,
	},
];

export const UserProfileChecksPage = () => {
	return (
		<Flex vertical gap={checksData.length > 0 ? 12 : 0} className={classes.userProfileChecksPageWrapper}>
			<Flex
				align='center'
				className={clsx({[classes.titlePage]: true}, {[classes.titleWhenNoChecks]: checksData.length === 0})}
			>
				<Typography.Text>Электронные чеки</Typography.Text>
			</Flex>
			{checksData.length !== 0 ? <LayoutWithContent checksData={checksData} /> : <LayoutWithoutContent />}
		</Flex>
	);
};
