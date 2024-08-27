import classes from '../styles.module.scss';
import {Flex, Typography} from 'antd';

export const LayoutWithoutContent = () => {
	return (
		<Flex justify='center' align='center' className={classes.layoutWithoutContentWrapper}>
			<Typography.Text>Здесь будут отображаться ваши электронные чеки заказов</Typography.Text>
		</Flex>
	);
};
