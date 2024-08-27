import {Wrapper} from '../../ui/Wrapper/Wrapper';
import {Flex, Spin} from 'antd';
import {ProductInfo} from './components/ProductInfo/ProductInfo';
import {MoreProducts} from './components/MoreProducts/MoreProducts';
import {ProductCardPrice} from './components/ProductCardPrice/ProductCardPrice';
import {BrandProfileCard} from '../../components/BrandProfileCard/BrandProfileCard';
import classes from './styles.module.scss';
import {useProduct} from './store/useProduct';
import {selectGetProductInfo, selectIsLoading, selectProductInfo} from './store/useProduct.selectors';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

export const ProductPage = () => {
	const {productId} = useParams();

	const getProductInfo = useProduct(selectGetProductInfo);
	const productInfo = useProduct(selectProductInfo);
	const isLoading = useProduct(selectIsLoading);

	useEffect(() => {
		getProductInfo(productId!);
	}, [getProductInfo, productId]);

	return (
		<Wrapper withCookies style={{padding: '12px 0', flexDirection: 'column'}}>
			<Flex justify='space-between' gap={12} style={{width: '100%'}}>
				<ProductInfo />
				{isLoading && <Spin size='large' />}
				{!isLoading && (
					<Flex vertical gap={12} className={classes.productCard}>
						<ProductCardPrice
							price={productInfo.price}
							title={productInfo.name}
							comments={productInfo.amountReviews}
							productsCount={productInfo.count}
							rate={productInfo.rating}
							discountPrice={productInfo.discountPrice}
						/>
						<BrandProfileCard
							shortened
							avatarSrc={productInfo.shop?.profilePicture?.filePath}
							title={productInfo.shop?.name}
							locationDescription='Кострома'
							description={productInfo.shop?.description}
						/>
					</Flex>
				)}
			</Flex>
			<MoreProducts />
		</Wrapper>
	);
};
