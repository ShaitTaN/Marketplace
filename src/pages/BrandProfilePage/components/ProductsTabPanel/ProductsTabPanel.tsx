import {useParams} from 'react-router-dom';
import {BrandProducts} from '../../../../modules/Shops/components/BrandProducts/BrandProducts';

export const ProductsTabPanel = () => {
	const {brandId} = useParams();

	return <BrandProducts brandId={brandId || ''} />;
};
