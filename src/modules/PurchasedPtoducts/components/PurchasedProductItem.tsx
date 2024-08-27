import classes from './styles.module.scss';
import {Flex, Typography} from 'antd';
import {Product} from '../../../app/models/ProductCard';
import {ProductCard} from '../../../components/ProductCard/ProductCard';
import {ButtonBase} from '../../../ui/Button/ButtonBase';
import HeartDefault from '../../../assets/icons/heartDefault.svg';

interface Props {
	purchasedProductsData: Product[];
}

export const PurchasedProductItem = ({purchasedProductsData}: Props) => {
	return (
		<div className={classes.purchasedProductItemWrapper}>
			{purchasedProductsData.map((item, index) => (
				<ProductCard
					className={classes.purchasedProduct}
					key={index}
					title={item.title}
					price={item.price}
					width={182}
					imgHeight={185}
					rating={item.rating}
					commentsCount={item.commentsCount}
					statuses={item.statuses}
					extraImgContent={<HeartDefault />}
					extraImgContentStyles={{top: '4px', right: '4px'}}
					extraContent={
						<Flex vertical>
							<Typography.Text className={classes.brand}>{item.brand}</Typography.Text>
							<ButtonBase buttonSize='medium' buttonType='secondary'>
								В корзину
							</ButtonBase>
						</Flex>
					}
				/>
			))}
		</div>
	);
};
