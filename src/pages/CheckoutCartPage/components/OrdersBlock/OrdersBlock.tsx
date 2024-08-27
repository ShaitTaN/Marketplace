import {Flex} from 'antd';
import {Order} from './components/Order';

const ordersData = [
	{
		title: 'Заказ №1, Brand Name',
		products: [
			{imgSrc: '', price: '18 500 ₽'},
			{imgSrc: '', price: '18 500 ₽'},
			{imgSrc: '', price: '18 500 ₽'},
			{imgSrc: '', price: '18 500 ₽'},
			{imgSrc: '', price: '18 500 ₽'},
			{imgSrc: '', price: '18 500 ₽'},
			{imgSrc: '', price: '18 500 ₽'},
		],
	},
	{
		title: 'Заказ №2, Brand Name',
		products: [
			{imgSrc: '', price: '18 500 ₽'},
			{imgSrc: '', price: '18 500 ₽'},
			{imgSrc: '', price: '18 500 ₽'},
			{imgSrc: '', price: '18 500 ₽'},
		],
	},
	{
		title: 'Заказ №3, Brand Name',
		products: [{imgSrc: '', price: '18 500 ₽'}],
	},
];

export const OrdersBlock = () => {
	return (
		<Flex vertical gap={12}>
			{ordersData.map((order, index) => (
				<Order key={index} title={order.title} products={order.products} />
			))}
		</Flex>
	);
};
