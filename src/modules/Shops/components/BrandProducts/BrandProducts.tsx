import {Flex, Spin} from 'antd';
import {useEffect} from 'react';
import {ProductCard} from '../../../../components/ProductCard/ProductCard';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';
import {useProducts} from '../../store/products/useProducts';
import {selectGetProducts, selectIsLoading, selectProducts} from '../../store/products/useProducts.selectors';
import classes from './styles.module.scss';

interface Props {
	brandId: string;
}

export const BrandProducts = ({brandId}: Props) => {
	const products = useProducts(selectProducts);
	const isLoading = useProducts(selectIsLoading);
	const getProducts = useProducts(selectGetProducts);

	useEffect(() => {
		getProducts(brandId);
	}, [getProducts, brandId]);

	return (
		<div style={{marginTop: products.length ? '12px' : '-22px'}}>
			{!products.length && (
				<div className={classes.empty}>
					{isLoading && <Spin size='large' />}
					{!isLoading && 'Здесь будут отображаться изделия бренда'}
				</div>
			)}

			{!!products.length && (
				<div className={classes.grid}>
					{products.map((product, i) => (
						<ProductCard
							key={i}
							width={213}
							imgHeight={216}
							price={product.price}
							rating={product.rating}
							// statuses={product.statuses}
							commentsCount={product.amountReviews}
							title={product.name}
							discount={product.discount}
							statuses={product.discount ? ['discount'] : []}
							extraContent={
								<Flex vertical gap={8}>
									<span style={{fontSize: '12px', fontWeight: '600', color: '#ADB2D4', marginLeft: '4px'}}>
										{product.shop.name}
									</span>
									<ButtonBase buttonType='secondary' buttonSize='medium' style={{width: '100%'}}>
										В корзину
									</ButtonBase>
								</Flex>
							}
							extraImgContent={'Like'}
							imgSrc={product.picturesList[0]?.filePath}
						/>
					))}
				</div>
			)}
		</div>
	);
};
