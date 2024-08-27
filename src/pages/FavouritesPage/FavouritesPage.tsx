import {Flex, Typography} from 'antd';
import {Tabs} from '../../ui/Tabs/Tabs';
import {Wrapper} from '../../ui/Wrapper/Wrapper';
import {BrandsTabPanel} from './components/BrandsTabPanel/BrandsTabPanel';
import {ProductsTabPanel} from './components/ProductsTabPanel/ProductsTabPanel';
import classes from './styles.module.scss';
import {useState} from 'react';
import ProductsIcon from '../../assets/icons/products.svg';
import BrandIcon from '../../assets/icons/brand.svg';

export const FavouritesPage = () => {
	const [key, setKey] = useState('1');
	return (
		<Wrapper withCookies vertical style={{padding: '12px 0'}}>
			<Flex gap={13}>
				<div className={classes.favouritesCategories} />
				<div className={classes.favouritesContent}>
					<Tabs
						onChange={(key) => setKey(key)}
						type='card'
						centered
						tabBarGutter={0}
						tabBarStyles={{
							background: '#fff',
							padding: '24px',
							borderRadius: key === '1' ? '16px 16px 0 0' : '16px 16px 8px 8px',
							width: '100%',
						}}
						items={[
							{
								key: '1',
								label: 'Изделия',
								children: <ProductsTabPanel />,
								icon: <ProductsIcon />,
							},
							{
								key: '2',
								label: 'Бренды',
								children: <BrandsTabPanel />,
								icon: <BrandIcon />,
							},
						]}
						topExtraContent={<Typography.Text className={classes.title}>Избранное</Typography.Text>}
					/>
				</div>
			</Flex>
		</Wrapper>
	);
};
