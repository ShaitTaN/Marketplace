import {Flex, Typography} from 'antd';
import classes from './styles.module.scss';
import {ImageDisplay} from '../../../../../../components/ImageDisplay/ImageDisplay';
import {CarouselSwiper} from '../../../../../../components/CarouselSwiper/CarouselSwiper';
import {SwiperSlide} from 'swiper/react';
import {Badge} from '../../../../../../ui/Badge/Badge';

interface Props {
	title: string;
	placeholder?: string;
	items?: string[];
}

export const Block = ({title, placeholder, items}: Props) => {
	return (
		<Flex vertical gap={16} className={classes.wrapper}>
			<Flex align='center' className={classes.titleWrapper}>
				<Typography.Text className={classes.title}>{title}</Typography.Text>{' '}
				{items!.length > 0 && (
					<sup>
						<Badge type={title === 'Купленные изделия' ? 'default' : 'notification'} value={items?.length} />
					</sup>
				)}
			</Flex>
			<div className={classes.content}>
				{items && items.length > 0 ? (
					<CarouselSwiper slidesPerView={'auto'}>
						{items.map((imageUrl, index) => (
							<SwiperSlide key={index} className={classes.slide}>
								<ImageDisplay url={imageUrl} classNameImg={classes.img} classNameGrayDiv={classes.grayDiv} />
							</SwiperSlide>
						))}
					</CarouselSwiper>
				) : (
					<Typography.Text className={classes.placeholder}>{placeholder}</Typography.Text>
				)}
			</div>
		</Flex>
	);
};
