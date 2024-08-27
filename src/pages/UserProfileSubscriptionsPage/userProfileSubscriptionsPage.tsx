import {Flex, Typography} from 'antd';
import {SubscriptionCard} from '../../app/models/SubscriptionCard';
import classes from './styles.module.scss';
import clsx from 'clsx';
import {Popover} from '../../ui/Popover/Popover';
import HelpIcon from '../../assets/icons/help.svg';
import {LayoutWithContent} from './components/LayoutWithContent';
import {LayoutWithoutContent} from './components/LayoutWithoutContent';

const subscriptionsData: SubscriptionCard[] = [
	{
		brandName: 'M&G all natural',
		subscribersCount: 57687,
		subscribed: true,
		avatarSrc: '',
	},
	{
		brandName: 'M&G all natural M&G all natural M&G all natural',
		subscribersCount: 57687,
		subscribed: true,
		avatarSrc: '',
	},
	{
		brandName: 'M&G all natural',
		subscribersCount: 57687,
		subscribed: true,
		avatarSrc: '',
	},
	{
		brandName: 'M&G all natural',
		subscribersCount: 57687,
		subscribed: true,
		avatarSrc: '',
	},
	{
		brandName: 'M&G all natural',
		subscribersCount: 57687,
		subscribed: true,
		avatarSrc: '',
	},
	{
		brandName: 'M&G all natural',
		subscribersCount: 57687,
		subscribed: true,
		avatarSrc: '',
	},
	{
		brandName: 'M&G all natural',
		subscribersCount: 57687,
		subscribed: true,
		avatarSrc: '',
	},
	{
		brandName: 'M&G all natural',
		subscribersCount: 57687,
		subscribed: true,
		avatarSrc: '',
	},
];

export const UserProfileSubscriptionsPage = () => {
	return (
		<Flex vertical gap={subscriptionsData?.length > 0 ? 12 : 0} className={classes.userProfileSubscriptionsPageWrapper}>
			<Flex
				gap={8}
				align='center'
				className={clsx(
					{[classes.titlePage]: true},
					{[classes.titleWhenNoSubscriptions]: subscriptionsData?.length === 0}
				)}
			>
				<Typography.Text>Подписки на бренды</Typography.Text>
				<Popover
					placement='bottomLeft'
					withoutBorder
					overlayClassName={classes.helpPopover}
					content={
						<Flex className={classes.helpText}>
							<span>
								На этой странице отображаются бренды, на которые вы подписались, чтобы следить за их публикациями
							</span>
						</Flex>
					}
					trigger='hover'
				>
					<HelpIcon style={{cursor: 'pointer'}} />
				</Popover>
			</Flex>
			{subscriptionsData?.length === 0 ? (
				<LayoutWithoutContent />
			) : (
				<LayoutWithContent subscriptionsData={subscriptionsData} />
			)}
		</Flex>
	);
};
