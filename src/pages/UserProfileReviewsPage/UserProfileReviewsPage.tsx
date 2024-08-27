import {Flex, Typography} from 'antd';
import classes from './styles.module.scss';
import {Tabs} from '../../ui/Tabs/Tabs';
import {AwaitingReviewsTabPanel} from './components/AwaitingReviewsTabPanel/AwaitingReviewsTabPanel';
import {MyReviewsTabPanel} from './components/MyReviewsTabPanel/MyReviewsTabPanel';

export const UserProfileReviewsPage = () => {
	return (
		<Flex vertical gap={12} className={classes.userProfileReviewsPageWrapper}>
			<Tabs
				type='card'
				centered
				tabBarGutter={0}
				tabBarStyles={{background: '#fff', padding: '24px', borderRadius: '16px'}}
				items={[
					{
						key: '1',
						label: <span>Ожидают отзыв</span>,
						children: <AwaitingReviewsTabPanel />,
					},
					{
						key: '2',
						label: <span>Мои отзывы</span>,
						children: <MyReviewsTabPanel />,
					},
				]}
				topExtraContent={<Typography.Text className={classes.title}>Отзывы</Typography.Text>}
			/>
		</Flex>
	);
};
