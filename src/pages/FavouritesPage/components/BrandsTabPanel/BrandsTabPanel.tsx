import {SubscriptionCard} from '../../../../app/models/SubscriptionCard';
import {LayoutWithContent} from './LayoutWithContent';
import {LayoutWithoutContent} from './LayoutWithoutContent';
import classes from './styles.module.scss';

const arrBrandSubscriptions: SubscriptionCard[] = [
	{
		brandName: 'M&G all natural',
		subscribersCount: 57687,
		subscribed: true,
		avatarSrc: '',
		rate: 4.7,
		imageArray: ['test', 'test', 'test', 'test', 'test', 'test'],
	},
	{
		brandName: 'M&G all natural M&G all natural M&G all natural',
		subscribersCount: 57687,
		subscribed: true,
		avatarSrc: '',
		rate: 4.7,
		imageArray: ['test', 'test', 'test', 'test', 'test', 'test'],
	},
	{
		brandName: 'M&G all natural',
		subscribersCount: 57687,
		subscribed: true,
		avatarSrc: '',
		rate: 4.7,
		imageArray: ['test', 'test', 'test', 'test', 'test', 'test'],
	},
	{
		brandName: 'M&G all natural',
		subscribersCount: 57687,
		subscribed: true,
		avatarSrc: '',
		rate: 4.7,
		imageArray: ['test', 'test', 'test', 'test', 'test', 'test'],
	},
	{
		brandName: 'M&G all natural',
		subscribersCount: 57687,
		subscribed: true,
		avatarSrc: '',
		rate: 4.7,
		imageArray: ['test', 'test', 'test', 'test', 'test', 'test'],
	},
	{
		brandName: 'M&G all natural',
		subscribersCount: 57687,
		subscribed: true,
		avatarSrc: '',
		rate: 4.7,
		imageArray: ['test', 'test', 'test', 'test', 'test', 'test'],
	},
	{
		brandName: 'M&G all natural',
		subscribersCount: 57687,
		subscribed: true,
		avatarSrc: '',
		rate: 4.7,
		imageArray: ['test', 'test', 'test', 'test', 'test', 'test'],
	},
	{
		brandName: 'M&G all natural',
		subscribersCount: 57687,
		subscribed: true,
		avatarSrc: '',
		rate: 4.7,
		imageArray: ['test', 'test', 'test', 'test', 'test', 'test'],
	},
];

export const BrandsTabPanel = () => {
	return (
		<div className={classes.wrapper}>
			{arrBrandSubscriptions.length > 0 ? (
				<LayoutWithContent arrBrandSubscriptions={arrBrandSubscriptions} />
			) : (
				<LayoutWithoutContent />
			)}
		</div>
	);
};
