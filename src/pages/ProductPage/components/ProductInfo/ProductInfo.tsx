import {ProductCarousel} from '../../../../components/ProductCarousel/ProductCarousel';
import classes from './styles.module.scss';
import {Flex} from 'antd';
import ArrowLeft from '../../../../assets/icons/ArrowLeftSmall.svg';
import {Breadcrumb} from '../../../../ui/Breadcrumb/Breadcrumb';
import {ProductDescription} from '../ProductDescription/ProductDescription';
import {ProductCharacteristics} from '../ProductCharacteristics/ProductCharacteristics';
import {ProductReviews} from '../ProductReviews/ProductReviews';
import {ProductQuestions} from '../ProductAnswers/ProductQuestions';
import {BrandInfo} from '../BrandInfo/BrandInfo';
import {Link} from '../../../../ui/Link/Link';
import {useProduct} from '../../store/useProduct';
import {selectProductInfo} from '../../store/useProduct.selectors';

export const ProductInfo = () => {
	const productInfo = useProduct(selectProductInfo);

	const carouselImages = productInfo.picturesList?.length
		? productInfo.picturesList.map((picture) => picture.filePath)
		: ['', '', '', '', ''];

	return (
		<div className={classes.productInfo}>
			<div className={classes.mainInfo}>
				<Flex justify='space-between' align='cener' className={classes.header}>
					<Flex align='center' gap={10}>
						<ArrowLeft cursor={'pointer'} style={{margin: '0 5px 0 2px'}} />
						<Breadcrumb
							items={[
								{
									title: (
										<Link size='small' to={'/'}>
											Главная
										</Link>
									),
								},
								{
									title: (
										<Link size='small' to={'/'}>
											Женщинам
										</Link>
									),
								},
								{
									title: (
										<Link size='small' to={'/'}>
											Блузы и рубашки
										</Link>
									),
								},
							]}
						/>
					</Flex>
					<span className={classes.article}>Артикул: {productInfo.article ?? '—'}</span>
				</Flex>
				<Flex vertical gap={40}>
					<ProductCarousel
						discount={productInfo.discount ? productInfo.discount : 15}
						statuses={['discount', 'new', 'exclusive']}
						images={carouselImages}
					/>
					<ProductDescription description={productInfo.description} />
					<ProductCharacteristics />
					<ProductReviews amountReviews={20} />
					<ProductQuestions amountQuestion={20} />
				</Flex>
			</div>
			<BrandInfo />
		</div>
	);
};
