import {Flex} from 'antd';
import {TextTabs} from '../../../../ui/TextTabs/TextTabs';
import {ProductsWrapper} from '../ProductsWrapper/ProductsWrapper';
import {Product} from '../../../../app/models/ProductCard';
import {useMainSettings} from '../../../../app/store/mainStore';

const products: Product[] = [
	{
		title: 'Платье-свитшот HOT PEPPER',
		price: '13700',
		brand: 'MOLOKO',
		statuses: ['new'],
	},
	{
		title: 'Моносерьга «Purple Rain»',
		price: '3520',
		oldPrice: '4000',
		brand: 'Футуристка',
		discount: 15,
		statuses: ['new', 'exclusive', 'discount'],
	},
	{
		title: 'Ароматическая свеча MIDNIGHT',
		price: '1500',
		rating: '4.9',
		commentsCount: 22,
		brand: 'AT I CANDLE ATELIER',
	},
	{
		title: 'Керамическая ваза «Этна»',
		price: '11300',
		brand: 'Очертания',
		statuses: ['exclusive'],
	},
	{
		title: 'Маска для сна 100% шёлк Mul...',
		price: '2900',
		rating: '4.9',
		commentsCount: 1424,
		brand: 'Sombra.Sleep',
	},
	{
		title: 'Твердый шампунь для в...',
		price: '600',
		rating: '4.8',
		commentsCount: 724,
		brand: 'Petrichor.eco',
	},
	{
		title: 'Лазурная шапка "Fairy" из мохера и шерсти',
		price: '3900',
		oldPrice: '4680',
		rating: '4.7',
		commentsCount: 625,
		brand: '2mymoods',
		discount: 20,
		statuses: ['discount'],
	},
];

export const ProductsTabPanel = () => {
	const {isAutenticated} = useMainSettings();
	const tabs = isAutenticated
		? ['Подобрано для вас', 'Подборка от Lysende', 'Популярные', 'Новинки', 'Эксклюзив']
		: ['Подборка от Lysende', 'Подобрано для вас', 'Популярные', 'Новинки', 'Эксклюзив'];
	return (
		<Flex vertical style={{background: 'white', padding: '24px', borderRadius: '0 0 16px 16px'}} gap={24}>
			<TextTabs tabs={tabs} />
			<ProductsWrapper products={products} />
			<ProductsWrapper products={products} reversed />
			<ProductsWrapper products={products} />
		</Flex>
	);
};
