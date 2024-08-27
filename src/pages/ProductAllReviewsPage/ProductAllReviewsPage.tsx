import {Flex} from 'antd';
import {useNavigate} from 'react-router-dom';
import {routesLinksEnum} from '../../app/routes';
import ArrowLeft from '../../assets/icons/ArrowLeftSmall.svg';
import {Reviews} from '../../modules/ProductReviews';
import {ReviewsRating} from '../../modules/ProductReviews/components/ReviewsRating/ReviewsRating';
import {ClickableIcon} from '../../ui/ClickableIcon/ClickableIcon';
import {Wrapper} from '../../ui/Wrapper/Wrapper';
import classes from './styles.module.scss';
import {ProductCardPrice} from './components/ProductCardPrice/ProductCardPrice';
import {useState} from 'react';
import {ReplyModal} from '../../components/ReplyModal/ReplyModal';

export const ProductAllReviewsPage = () => {
	const navigate = useNavigate();
	const [isOpenModal, setIsOpenModal] = useState(false);

	const handleOpenModal = () => {
		setIsOpenModal(true);
	};

	const handleCloseModal = () => {
		setIsOpenModal(false);
	};

	return (
		<Wrapper style={{padding: '12px 0 24px', gap: '12px'}}>
			<Flex vertical gap={16} className={classes.content}>
				<Flex vertical gap={16} className={classes.brandProfileAllReviewsTitle}>
					<ClickableIcon
						className={classes.backButton}
						icon={<ArrowLeft style={{width: '21px', height: '15px'}} />}
						value='К изделию'
						onClick={() => navigate(routesLinksEnum.product)}
					/>
					<h3>
						Отзывы <sup>132</sup>
					</h3>
				</Flex>
				<Reviews />
			</Flex>
			<Flex vertical gap={12} className={classes.cards}>
				<ProductCardPrice
					price={7500}
					title='Рубашка удлинённая с шортами из натурального льна'
					rate={4.7}
					comments={132}
					productsCount={4}
				/>
				<ReviewsRating totalRate={132} name='изделия' handleOpenModal={handleOpenModal} isProductOrderedByUser />
			</Flex>
			<ReplyModal open={isOpenModal} onCancel={handleCloseModal} imgSrc={'ссылка на картинку'} title='Костюм' />
		</Wrapper>
	);
};
