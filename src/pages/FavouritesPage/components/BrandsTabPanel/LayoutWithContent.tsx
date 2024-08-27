import {SubscriptionCard} from '../../../../app/models/SubscriptionCard';
import {BrandSubscriptionCard} from '../../../../components/BrandSubscriptionCard/BrandSubscriptionCard';
import classes from './styles.module.scss';

interface Props {
	arrBrandSubscriptions: SubscriptionCard[];
}
export const LayoutWithContent = ({arrBrandSubscriptions}: Props) => {
	return (
		<div className={classes.layoutWithContent}>
			{arrBrandSubscriptions.map((item) => (
				<BrandSubscriptionCard isLikedType width={'100%'} key={item.brandName} {...item} />
			))}
		</div>
	);
};
