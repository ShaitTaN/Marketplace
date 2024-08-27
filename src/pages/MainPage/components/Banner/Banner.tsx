import classes from './styles.module.scss';
import {CarouselSwiper} from '../../../../components/CarouselSwiper/CarouselSwiper';
import {SwiperSlide} from 'swiper/react';
import {useState} from 'react';

export const Banner = () => {
	const [onEnter, setOnEnter] = useState(false);

	const onEnterHandler = () => {
		setOnEnter(true);
	};
	const onLeaveHandler = () => {
		setOnEnter(false);
	};

	return (
		<div className={classes.banner} onMouseEnter={onEnterHandler} onMouseLeave={onLeaveHandler}>
			<CarouselSwiper showNavigationButtons={onEnter} withPagination>
				{Array(5)
					.fill(0)
					.map((_, index) => (
						<SwiperSlide key={index}>
							<div className={classes.item}>
								<img
									src='https://static.vecteezy.com/system/resources/previews/008/716/284/non_2x/modern-banner-background-full-of-colors-gradations-concept-banners-business-etc-eps-10-free-vector.jpg'
									alt=''
								/>
							</div>
						</SwiperSlide>
					))}
			</CarouselSwiper>
		</div>
	);
};
