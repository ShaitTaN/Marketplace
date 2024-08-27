import classes from './styles.module.scss';
import {Flex, Typography} from 'antd';
import {Product} from '../../app/models/ProductCard';
import {Popover} from '../../ui/Popover/Popover';
import HelpIcon from '../../assets/icons/help.svg';
import {LayoutWithContent} from './components/LayoutWithContent';
import {LayoutWithoutContend} from './components/LayoutWithoutContent';

const purchasedProductsData: Product[] = [
	{
		title: 'Текст в одну строку текст текст текст тексттекст',
		price: '18500',
		brand: 'Бренд',
		image: '',
		statuses: [],
		oldPrice: '',
		discount: 0,
		rating: '4,9',
		commentsCount: 22,
	},
	{
		title: 'Текст в одну строку текст текст текст тексттекст',
		price: '18500',
		brand: 'Бренд',
		image: '',
		statuses: [],
		oldPrice: '',
		discount: 0,
		rating: '4,9',
		commentsCount: 22,
	},
	{
		title: 'Текст в одну строку текст текст текст тексттекст',
		price: '18500',
		brand: 'Бренд',
		image: '',
		statuses: [],
		oldPrice: '',
		discount: 0,
		rating: '4,9',
		commentsCount: 22,
	},
	{
		title: 'Текст в одну строку текст текст текст тексттекст',
		price: '18500',
		brand: 'Бренд',
		image: '',
		statuses: [],
		oldPrice: '',
		discount: 0,
		rating: '4,9',
		commentsCount: 22,
	},
	{
		title: 'Текст в одну строку текст текст текст тексттекст',
		price: '18500',
		brand: 'Бренд',
		image: '',
		statuses: [],
		oldPrice: '',
		discount: 0,
		rating: '4,9',
		commentsCount: 22,
	},
	{
		title: 'Текст в одну строку текст текст текст тексттекст',
		price: '18500',
		brand: 'Бренд',
		image: '',
		statuses: [],
		oldPrice: '',
		discount: 0,
		rating: '4,9',
		commentsCount: 22,
	},
	{
		title: 'Текст в одну строку текст текст текст тексттекст',
		price: '18500',
		brand: 'Бренд',
		image: '',
		statuses: [],
		oldPrice: '',
		discount: 0,
		rating: '4,9',
		commentsCount: 22,
	},
	{
		title: 'Текст в одну строку текст текст текст тексттекст',
		price: '18500',
		brand: 'Бренд',
		image: '',
		statuses: [],
		oldPrice: '',
		discount: 0,
		rating: '4,9',
		commentsCount: 22,
	},
];

export const UserProfilePurchasedProductsPage = () => {
	return (
		<Flex vertical className={classes.userProfilePurchasedProductsWrapper}>
			<Flex align='center' gap={8} className={classes.titlePage}>
				<Typography.Text>Купленные изделия</Typography.Text>
				{purchasedProductsData.length === 0 ? null : (
					<Popover
						placement='right'
						withoutBorder
						overlayClassName={classes.helpPopover}
						content={
							<Flex className={classes.helpText}>
								<span>Здесь отображаются изделия, которые вы уже купили и получили</span>
							</Flex>
						}
						trigger='hover'
					>
						<HelpIcon style={{cursor: 'pointer'}} />
					</Popover>
				)}
			</Flex>
			{purchasedProductsData.length !== 0 ? (
				<LayoutWithContent purchasedProductsData={purchasedProductsData} />
			) : (
				<LayoutWithoutContend />
			)}
		</Flex>
	);
};
