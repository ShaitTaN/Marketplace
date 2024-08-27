import {Flex} from 'antd';
import {Product} from '../../../../app/models/ProductCard';
import {ProductCard} from '../../../../components/ProductCard/ProductCard';
import classes from './styles.module.scss';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';

interface Props {
	arrContent: Product[];
}
export const LayoutWithContent = ({arrContent}: Props) => {
	return (
		<div className={classes.layoutWithContent}>
			{arrContent.map((item) => (
				<ProductCard
					isActiveHeart={true}
					key={item.title}
					imgSrc={item.image}
					price={item.price}
					oldPrice={item.oldPrice}
					rating={item.rating}
					title={item.title}
					commentsCount={item.commentsCount}
					discount={item.discount}
					statuses={item.statuses}
					imgHeight={195}
					width={192}
					extraContent={
						<Flex vertical gap={8}>
							<span style={{fontSize: '12px', fontWeight: '600', color: '#ADB2D4', marginLeft: '4px'}}>
								M&G all natural
							</span>
							<ButtonBase
								buttonType='secondary'
								buttonSize='medium'
								style={{width: '100%'}}
								disabled={item.statuses?.includes('outOfStock')}
							>
								В корзину
							</ButtonBase>
						</Flex>
					}
					extraImgContent={'Like'}
				/>
			))}
		</div>
	);
};
