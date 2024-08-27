import {Flex, Typography} from 'antd';
import {Tabs} from '../../ui/Tabs/Tabs';
import {ActiveTabPanel} from './components/ActiveTabPanel/ActiveTabPanel';
import {ArchiveTabPanel} from './components/ArchiveTabPanel/ArchiveTabPanel';
import classes from './styles.module.scss';

export const UserProfileDeliveryPage = () => {
	return (
		<Flex vertical className={classes.wrapper}>
			<Typography.Title level={2} className={classes.title}>
				Доставки
			</Typography.Title>
			<Tabs
				type='card'
				centered
				isTabModal
				tabBarGutter={0}
				tabBarStyles={{background: '#fff', padding: '24px', borderRadius: '0 0 16px 16px'}}
				items={[
					{
						key: '1',
						label: 'Активные',
						children: <ActiveTabPanel />,
					},
					{
						key: '2',
						label: 'Архивные',
						children: <ArchiveTabPanel />,
					},
				]}
			/>
		</Flex>
	);
};
