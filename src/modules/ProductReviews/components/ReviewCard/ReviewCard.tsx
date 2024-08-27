import {Rate} from '../../../../ui/Rate/Rate';
import classes from './styles.module.scss';
import {Avatar, Card, Flex, Typography} from 'antd';
import {ReviewItem} from '../ReviewItem/ReviewItem';
import {routesLinksEnum} from '../../../../app/routes';

interface Item {
	productName: string;
	productRate: number;
	review: {
		authorName: string;
		avaSrc: string;
		date: string;
		text: string;
		imagesSrc?: string[];
	};
}

interface Props {
	product: Item;
}

export const ReviewCard = ({product}: Props) => {
	return (
		<Card bordered={false} className={classes.brandProfileReviewCard}>
			<a href={routesLinksEnum.product} target='_blank'>
				<Flex gap={12}>
					<Avatar className={classes.productAvatar} />
					<Flex vertical gap={6}>
						<Typography.Text className={classes.productName}>{product.productName}</Typography.Text>
						<Rate disabled value={product.productRate} />
					</Flex>
				</Flex>
			</a>
			<div className={classes.productReview}>
				<ReviewItem review={product.review} isBrandProfile={true} />
			</div>
		</Card>
	);
};
