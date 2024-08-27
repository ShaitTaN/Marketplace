import {Tabs} from '../../../../ui/Tabs/Tabs';
import {ProductsTabPanel} from '../ProductsTabPanel/ProductsTabPanel';
import {PublishsTabPanel} from '../PublishsTabPanel/PublishsTabPanel';
import ShopIcon from '../../../../assets/icons/shop.svg';
import StarIcon from '../../../../assets/icons/star_smooth.svg';

export const BrandProfileTabs = () => {
	return (
		<div>
			<Tabs
				isTabLarge
				type='card'
				centered
				tabBarGutter={0}
				tabBarStyles={{background: '#fff', padding: '24px', borderRadius: '16px'}}
				items={[
					{
						key: '1',
						label: 'Изделия',
						children: <ProductsTabPanel />,
						icon: <ShopIcon />,
					},
					{
						key: '2',
						label: 'Публикации',
						children: <PublishsTabPanel />,
						icon: <StarIcon />,
					},
				]}
			/>
		</div>
	);
};
