import {Flex, Typography} from 'antd';
import classes from '../styles.module.scss';

export const LayoutWithoutContent = () => {
	return (
		<Flex className={classes.subscriptionWrapperWithoutContent} justify='center' align='center'>
			<Typography.Text>
				Здесь будут отображаться бренды, на которые вы подписались, чтобы следить за их публикациями
			</Typography.Text>
		</Flex>
	);
};
