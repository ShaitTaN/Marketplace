import {SubscriptionCard} from '../../../app/models/SubscriptionCard';
import {SubscriptionsItems} from '../../../modules/Subscriptions';
import classes from '../styles.module.scss';

interface Props {
	subscriptionsData: SubscriptionCard[];
}

export const LayoutWithContent = ({subscriptionsData}: Props) => {
	return (
		<div className={classes.subscriptionWrapperWithContent}>
			<SubscriptionsItems subscriptionsData={subscriptionsData} />
		</div>
	);
};
