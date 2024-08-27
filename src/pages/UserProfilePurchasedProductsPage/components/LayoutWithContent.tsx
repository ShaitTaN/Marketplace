import classes from './../styles.module.scss';
import {Flex} from 'antd';
import {Product} from '../../../app/models/ProductCard';
import {PurchasedProductItem} from '../../../modules/PurchasedPtoducts';

interface Props {
	purchasedProductsData: Product[];
}

export const LayoutWithContent = ({purchasedProductsData}: Props) => {
	return (
		<Flex className={classes.purchasedProductWrapperWithContent}>
			<PurchasedProductItem purchasedProductsData={purchasedProductsData} />
		</Flex>
	);
};
