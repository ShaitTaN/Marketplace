import {Flex, Typography} from 'antd';
import {routesLinksEnum} from '../../../../app/routes';
import ArrowHead from '../../../../assets/icons/arrowHead.svg';
import {Reviews} from '../../../../modules/ProductReviews';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';
import classes from './styles.module.scss';

interface Props {
	amountReviews: number;
}

export const ProductReviews = ({amountReviews}: Props) => {
	return (
		<Flex vertical gap={16} className={classes.reviews}>
			<h3>
				Отзывы<sup>{amountReviews ? amountReviews : 0}</sup>
			</h3>
			{amountReviews ? (
				<Flex vertical gap={36} align={'start'}>
					<Reviews />
					<ButtonBase
						iconRight={
							<div
								style={{width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
							>
								<ArrowHead />
							</div>
						}
						buttonSize='medium'
						onClick={() => window.open(routesLinksEnum.productAllreviews)}
					>
						Все отзывы
					</ButtonBase>
				</Flex>
			) : (
				<Flex>
					<Typography className={classes.noReviews}>
						Отзывов об этом изделии пока нет — ваш может стать первым.
					</Typography>
				</Flex>
			)}
		</Flex>
	);
};
