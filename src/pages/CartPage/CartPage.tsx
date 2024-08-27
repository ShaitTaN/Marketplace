import {Flex} from 'antd';
import {Product} from '../../app/models/ProductCard';
import {Wrapper} from '../../ui/Wrapper/Wrapper';
import {CardCartPrice} from '../../components/CardCartPrice/CardCartPrice';
import {CartProducts} from './components/CartProducts/CartProducts';

const productsData: (Product & {quantity: number})[] = [
	{
		title: 'Чёрное терракотовое платье с застежкой на пуговицы',
		brand: 'Brand',
		price: '25000',
		oldPrice: '25000',
		discount: 15,
		quantity: 1,
		statuses: ['discount'],
	},
	{
		title: 'Чёрное терракотовое платье с застежкой на пуговицы',
		brand: 'Brand',
		price: '18500',
		quantity: 1,
	},
	{
		title: 'Чёрное терракотовое платье с застежкой на пуговицы',
		brand: 'Brand',
		price: '18500',
		quantity: 1,
	},
];

export const CartPage = () => {
	return (
		<Wrapper withCookies style={{padding: '12px 0 50px 0'}}>
			<Flex justify='space-between' align='flex-start' gap={11} style={{width: '100%'}}>
				<CartProducts products={productsData} />
				<CardCartPrice productsCount={3} price={32000} />
			</Flex>
		</Wrapper>
	);
};
