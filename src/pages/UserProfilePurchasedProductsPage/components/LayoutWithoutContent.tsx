import {Flex, Typography} from 'antd';
import classes from '../styles.module.scss';

export const LayoutWithoutContend = () => {
	return (
		<Flex justify='center' align='center' className={classes.purchasedProductWrapperWithoutContent}>
			<Typography.Text>Здесь будут отображаться изделия, которые вы уже купили и получили</Typography.Text>
		</Flex>
	);
};
