import {Flex, Typography} from 'antd';
import classes from './styles.module.scss';

interface Props {
	count: number | string;
	title: string;
}

export const BrandStats = ({count, title}: Props) => {
	return (
		<Flex vertical gap={4} align='center' className={classes.statInfo}>
			<Typography className={classes.count}>{count}</Typography>
			<Typography className={classes.title}>{title}</Typography>
		</Flex>
	);
};
