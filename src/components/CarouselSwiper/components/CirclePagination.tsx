import {useSwiper} from 'swiper/react';
import classes from '../styles.module.scss';
import clsx from 'clsx';
import {Flex} from 'antd';
import {useEffect, useState} from 'react';

interface Props {
	currentIndex: number;
	setCurrentIndex: (index: number) => void;
}

export const CirclePagination = ({currentIndex, setCurrentIndex}: Props) => {
	const swiper = useSwiper();
	const [slidesCount, setSlidesCount] = useState(0);

	useEffect(() => {
		if (swiper.slides) {
			setSlidesCount(swiper.slides.length);
		}
	}, [swiper.slides, swiper.realIndex]);

	const handleClick = (index: number) => {
		swiper.slideTo(index);
		setCurrentIndex(index);
	};

	return (
		<Flex align='center' justify='center' gap={8} className={classes.pagination}>
			{Array(slidesCount)
				.fill(0)
				.map((_, index) => (
					<div
						onClick={() => handleClick(index)}
						key={index}
						className={clsx({
							[classes.circle]: true,
							[classes.active]: index === currentIndex,
						})}
					/>
				))}
		</Flex>
	);
};
