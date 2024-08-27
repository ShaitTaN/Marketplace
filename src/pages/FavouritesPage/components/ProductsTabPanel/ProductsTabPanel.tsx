import {Product} from '../../../../app/models/ProductCard';
import {LayoutWithContent} from './LayoutWithContent';
import {LayoutWithoutContent} from './LayoutWithoutContent';
import classes from './styles.module.scss';

const arrContent: Product[] = [
	{
		title: 'Платье-свитшот HOT PEPPER',
		price: '13700',
		brand: 'MOLOKO',
		statuses: ['outOfStock'],
		rating: '4.9',
		commentsCount: 22,
	},
	{
		title: 'Моносерьга «Purple Rain»',
		price: '3520',
		oldPrice: '4000',
		brand: 'Футуристка',
		discount: 15,
		statuses: ['new', 'exclusive', 'discount'],
		rating: '4.9',
		commentsCount: 22,
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
		rating: '4.9',
		commentsCount: 22,
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
	return (
		<div className={classes.wrapper}>
			{arrContent.length > 0 ? <LayoutWithContent arrContent={arrContent} /> : <LayoutWithoutContent />}
		</div>
	);
};
