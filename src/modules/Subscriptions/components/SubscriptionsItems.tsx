import {SubscriptionCard} from '../../../app/models/SubscriptionCard';
import {BrandSubscriptionCard} from '../../../components/BrandSubscriptionCard/BrandSubscriptionCard';

interface Props {
	subscriptionsData: SubscriptionCard[];
}

export const SubscriptionsItems = ({subscriptionsData}: Props) => {
	return (
		<>
			{subscriptionsData.map((item, index) => (
				<BrandSubscriptionCard
					key={index}
					brandName={item.brandName}
					subscribersCount={item.subscribersCount}
					subscribed={item.subscribed}
					avatarSrc={item.avatarSrc}
				/>
			))}
		</>
	);
};
