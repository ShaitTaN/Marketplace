import classes from './styles.module.scss';
import {Card, Flex, Typography} from 'antd';
import {Link} from '../../ui/Link/Link';
import {ButtonBase} from '../../ui/Button/ButtonBase';
import {ChecksCard} from '../../app/models/ChecksCard';

export const CheckCard = ({order, brandName, date, price}: ChecksCard) => {
	return (
		<Card bordered={false} className={classes.checkCard}>
			<Flex gap={64} justify='space-between' align='center'>
				<Flex vertical gap={4} className={classes.orderTitleWrapper}>
					<Link component='button' size='normal'>
						{order}
					</Link>
					<Typography.Text className={classes.orderBrandName}>{brandName}</Typography.Text>
				</Flex>
				<Typography.Text className={classes.orderDate}>{date}</Typography.Text>
				<Typography.Text className={classes.orderPrice}>{`${price?.toLocaleString('ru')} ₽`}</Typography.Text>
				<ButtonBase buttonSize='small' buttonType='secondary'>
					Открыть
				</ButtonBase>
			</Flex>
		</Card>
	);
};
