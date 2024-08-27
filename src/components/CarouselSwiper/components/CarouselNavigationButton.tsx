import clsx from 'clsx';
import ArrowLeft from '../../../assets/icons/ArrowLeft.svg';
import ArrowRight from '../../../assets/icons/ArrowRight.svg';
import ArrowRightSmall from '../../../assets/icons/arrowHeadSmall.svg';
import {IconButton} from '../../../ui/IconButton/IconButton';
import classes from '../styles.module.scss';
import React, {useEffect, useState} from 'react';
import {useSwiper} from 'swiper/react';

const Icons = {
	default: {
		left: <ArrowLeft />,
		right: <ArrowRight />,
	},
	small: {
		left: <ArrowRightSmall className={classes.btnSmall} style={{transform: 'rotate(180deg)'}} />,
		right: <ArrowRightSmall className={classes.btnSmall} />,
	},
};

interface Props {
	btnStyles?: React.CSSProperties;
	setCurrentIndex: (index: number) => void;
	currentIndex: number;
	showNavigationButtons?: boolean;
	btnType?: 'default' | 'small';
}

export const CarouselNavigationButtons = ({
	btnStyles,
	setCurrentIndex,
	currentIndex,
	showNavigationButtons,
	btnType,
}: Props) => {
	const swiper = useSwiper();
	const [activeButtons, setActiveButtons] = useState(['left', 'right']);
	const onClick = (direction: 'left' | 'right') => {
		if (direction === 'left') {
			swiper.slidePrev();
		} else {
			swiper.slideNext();
		}

		if (swiper.isBeginning && !swiper.isEnd) {
			setActiveButtons(['right']);
		} else if (swiper.isEnd && !swiper.isBeginning) {
			setActiveButtons(['left']);
		} else if (swiper.isBeginning && swiper.isEnd) {
			setActiveButtons([]);
		} else {
			setActiveButtons(['left', 'right']);
		}
		setCurrentIndex(swiper.realIndex);
	};

	useEffect(() => {
		if (swiper.isBeginning && !swiper.isEnd) {
			setActiveButtons(['right']);
		} else if (swiper.isEnd && !swiper.isBeginning) {
			setActiveButtons(['left']);
		} else if (swiper.isBeginning && swiper.isEnd) {
			setActiveButtons([]);
		} else {
			setActiveButtons(['left', 'right']);
		}
	}, [swiper, currentIndex]);

	return (
		<>
			{activeButtons.includes('left') && (
				<IconButton
					style={btnStyles}
					icon={Icons[btnType!].left}
					className={clsx({
						[classes.button]: true,
						[classes[`left-${btnType}`]]: true,
						[classes.hidden]: !showNavigationButtons,
						[classes.smallBtn]: btnType === 'small',
					})}
					onClick={() => onClick('left')}
				/>
			)}
			{activeButtons.includes('right') && (
				<IconButton
					style={btnStyles}
					icon={Icons[btnType!].right}
					className={clsx({
						[classes.button]: true,
						[classes[`right-${btnType}`]]: true,
						[classes.hidden]: !showNavigationButtons,
						[classes.smallBtn]: btnType === 'small',
					})}
					onClick={() => onClick('right')}
				/>
			)}
		</>
	);
};
