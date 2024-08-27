import classes from './styles.module.scss';
import {Flex} from 'antd';
import {ProductCard} from '../../../../components/ProductCard/ProductCard';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';

export const MoreProducts = () => {
	return (
		<Flex justify='center' align='center' vertical gap={24} style={{marginTop: '24px'}}>
			<Flex className={classes.moreProducts} vertical gap={18}>
				<h3>Другие изделия бренда</h3>
				<div className={classes.items}>
					{Array(5)
						.fill(0)
						.map((_, index) => (
							<ProductCard
								key={index}
								className={classes.item}
								price={'18500'}
								rating={'4,9'}
								commentsCount={22}
								title='Текст в одну строку текст текст Текст в одну строку текст текст'
								imgSrc='https://wallpapers.com/images/featured/solid-grey-ew5fya1gh2bgc49b.jpg'
								width={192}
								imgHeight={195}
								extraContent={
									<Flex vertical gap={8}>
										<span
											style={{fontSize: '12px', fontWeight: '600', color: '#ADB2D4', marginLeft: '4px'}}
											className='titleNotCopy'
										>
											Бренд
										</span>
										<ButtonBase buttonType='secondary' buttonSize='medium' style={{width: '100%'}}>
											В корзину
										</ButtonBase>
									</Flex>
								}
								extraImgContent={'Like'}
							/>
						))}
				</div>
			</Flex>
			<Flex className={classes.moreProducts} vertical gap={18}>
				<h3>Похожее</h3>
				<div className={classes.items}>
					{Array(10)
						.fill(0)
						.map((_, index) => (
							<ProductCard
								key={index}
								className={classes.item}
								price={'18500'}
								rating={'4,9'}
								commentsCount={22}
								title='Текст в одну строку текст текст Текст в одну строку текст текст'
								imgSrc='https://wallpapers.com/images/featured/solid-grey-ew5fya1gh2bgc49b.jpg'
								width={192}
								imgHeight={195}
								extraContent={
									<Flex vertical gap={8}>
										<span
											style={{fontSize: '12px', fontWeight: '600', color: '#ADB2D4', marginLeft: '4px'}}
											className='titleNotCopy'
										>
											Бренд
										</span>
										<ButtonBase buttonType='secondary' buttonSize='medium' style={{width: '100%'}}>
											В корзину
										</ButtonBase>
									</Flex>
								}
								extraImgContent={'Like'}
							/>
						))}
				</div>
			</Flex>
			<ButtonBase width={200} buttonSize='medium'>
				Показать еще
			</ButtonBase>
		</Flex>
	);
};
