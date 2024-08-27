import {Tabs} from '../../../../ui/Tabs/Tabs';
import {ProductsTabPanel} from '../ProductsTabPanel/ProductsTabPanel';
import ShopIcon from '../../../../assets/icons/shop.svg';
import StarIcon from '../../../../assets/icons/star_smooth.svg';
import {PublishsTabPanel} from '../PublishsTabPanel/PublishsTabPanel';

export const MainTabs = () => {
	return (
		<div>
			<Tabs
				type='card'
				centered
				tabBarGutter={0}
				tabBarStyles={{background: '#fff', padding: '24px 24px 0', borderRadius: '16px 16px 0 0'}}
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
