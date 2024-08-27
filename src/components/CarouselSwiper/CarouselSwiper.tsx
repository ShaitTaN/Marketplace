import 'swiper/css';
import 'swiper/css/navigation';
import {Swiper, SwiperProps} from 'swiper/react';
import {CarouselNavigationButtons} from './components/CarouselNavigationButton';
import classes from './styles.module.scss';
import React, {useState} from 'react';
import {CirclePagination} from './components/CirclePagination';

interface Props extends SwiperProps {
	btnStyles?: React.CSSProperties;
	withPagination?: boolean;
	showNavigationButtons?: boolean;
	btnType?: 'default' | 'small';
}

export const CarouselSwiper = ({
	children,
	btnStyles,
	showNavigationButtons = true,
	withPagination = false,
	modules,
	btnType = 'default',
	...props
}: Props) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	return (
		<Swiper spaceBetween={12} className={classes.swiper} modules={modules} {...props}>
			{children}
			<CarouselNavigationButtons
				showNavigationButtons={showNavigationButtons}
				btnStyles={btnStyles}
				currentIndex={currentIndex}
				setCurrentIndex={setCurrentIndex}
				btnType={btnType}
			/>
			{withPagination && <CirclePagination currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />}
		</Swiper>
	);
};
