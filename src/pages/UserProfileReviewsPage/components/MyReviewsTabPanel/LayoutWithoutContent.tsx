import {Flex, Typography} from 'antd';
import classes from './styles.module.scss';

export const LayoutWithoutContent = () => {
	return (
		<div className={classes.layoutWithoutContent}>
			<Flex align='center' justify='center' className={classes.textWrapper}>
				<Typography.Text className={classes.text}>Здесь будут отображаться ваши отзывы на изделия</Typography.Text>
			</Flex>
		</div>
	);
};
