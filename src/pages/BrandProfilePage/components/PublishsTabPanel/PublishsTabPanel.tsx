import {useParams} from 'react-router-dom';
import {BrandPublications} from '../../../../modules/Shops/components/BrandPublications/BrandPublications';

export const PublishsTabPanel = () => {
	const {brandId} = useParams();

	return <BrandPublications brandId={brandId || ''} />;
};
