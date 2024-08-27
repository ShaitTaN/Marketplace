import classes from './styles.module.scss';
import {ProductCard} from '../../../../components/ProductCard/ProductCard';
import clsx from 'clsx';
import {Flex} from 'antd';
import {Product} from '../../../../app/models/ProductCard';

interface Props {
	products: Product[];
	reversed?: boolean;
}

export const ProductsWrapper = ({products, reversed}: Props) => {
	return (
		<div className={clsx({[classes.wrapper]: true, [classes.reversed]: reversed})}>
			<Flex wrap='wrap' gap={'24px 16px'} style={{maxWidth: '680px'}}>
				{products.slice(0, 6).map((product, index) => (
					<div key={index} className={clsx(classes.item, `${classes.item}_${index + 1}`)}>
						<ProductCard
							price={product.price}
							oldPrice={product.oldPrice}
							rating={product.rating}
							commentsCount={product.commentsCount}
							title={product.title}
							extraContent={
								<span
									style={{fontSize: '14px', fontWeight: '600', color: '#ADB2D4', marginLeft: '4px', lineHeight: '16px'}}
									className='titleNotCopy'
								>
									{product.brand}
								</span>
							}
							imgSrc={product.image}
							width={'100%'}
							imgHeight={index === 6 ? '533px' : '218px'}
							discount={product.discount}
							statuses={product.statuses}
						/>
					</div>
				))}
			</Flex>
			<div className={classes.big}>
				{products.slice(6).map((product, index) => (
					<ProductCard
						key={index}
						price={product.price}
						oldPrice={product.oldPrice}
						rating={product.rating}
						commentsCount={product.commentsCount}
						title={product.title}
						extraContent={
							<span
								style={{fontSize: '14px', fontWeight: '600', color: '#ADB2D4', marginLeft: '4px', lineHeight: '16px'}}
								className='titleNotCopy'
							>
								{product.brand}
							</span>
						}
						imgSrc={product.image}
						width={'100%'}
						imgHeight={'533px'}
						discount={product.discount}
						statuses={product.statuses}
					/>
				))}
			</div>
		</div>
	);
};
