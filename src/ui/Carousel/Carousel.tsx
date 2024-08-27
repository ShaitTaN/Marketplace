import {Carousel as CarouselAnt, CarouselProps} from 'antd';
import classes from './styles.module.scss';
import clsx from 'clsx';

/**
 @deprecated 
 Вместо него использовать CarouselSwiper
*/

interface Props extends CarouselProps {
	dotsSecondary?: boolean;
	dotsWhiteLarge?: boolean;
}

export const Carousel = ({className, children, dotsSecondary, dotsWhiteLarge, ...props}: Props) => {
	return (
		<CarouselAnt
			className={clsx(
				classes.banner,
				dotsSecondary && classes.dotsSecondary,
				dotsWhiteLarge && classes.dotsWhiteLarge,
				className && className,
			)}
			dots={{className: classes.dots}}
			{...props}
		>
			{children}
		</CarouselAnt>
	);
};