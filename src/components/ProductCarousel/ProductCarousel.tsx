import React from 'react';
import classes from './styles.module.scss';
import {Flex} from 'antd';
import {IconButton} from '../../ui/IconButton/IconButton';
import ArrowRight from '../../assets/icons/ArrowRight.svg';
import clsx from 'clsx';
import {ImageDisplay} from '../ImageDisplay/ImageDisplay';
import {FullScreenCarousel} from '../FullScreenCarousel/FullScreenCarousel';
import {Badge} from '../../ui/Badge/Badge';

type Statuses = 'discount' | 'new' | 'exclusive';
interface Props {
	images: string[];
	discount?: number;
	statuses?: Statuses[];
}

export const ProductCarousel = ({images, discount, statuses}: Props) => {
	const [activeIndex, setActiveIndex] = React.useState(0);
	const [position, setPosition] = React.useState(0);
	const [isFullScreenCarouselOpen, setIsFullScreenCarouselOpen] = React.useState(false);

	const onClick = (index: number) => {
		setActiveIndex(index);
	};

	const onArrowClick = (position: number) => {
		setPosition(position);
	};

	const itemHeight = 91;
	const itemGap = 6.5;
	const maxPosition = -(itemHeight + itemGap) * (images.length - 4);

	return (
		<div className={classes.carousel}>
			<Flex vertical gap={itemGap} className={classes.mini} style={{transform: `translateY(${position}px)`}}>
				{images.map((image, index) => (
					<div
						key={index}
						className={clsx({[classes.item]: true, [classes.active]: index === activeIndex})}
						onClick={() => onClick(index)}
					>
						<ImageDisplay url={image} />
					</div>
				))}
			</Flex>
			<div className={classes.big} onClick={() => setIsFullScreenCarouselOpen(true)}>
				<ImageDisplay url={images[activeIndex]} />
				<div className={classes.statuses}>
					{statuses?.map((item, index) => (
						<Badge key={index} type={item} value={item === 'discount' ? discount : item} size='large' />
					))}
				</div>
			</div>
			{position < 0 && (
				<IconButton
					icon={<ArrowRight />}
					className={clsx(classes.btn, classes.up)}
					onClick={() => onArrowClick(position + itemHeight + itemGap)}
				/>
			)}
			{images.length > 4 && position > maxPosition && (
				<IconButton
					icon={<ArrowRight />}
					className={classes.btn}
					onClick={() => onArrowClick(position - itemHeight - itemGap)}
				/>
			)}
			<FullScreenCarousel
				images={images}
				open={isFullScreenCarouselOpen}
				onClose={() => setIsFullScreenCarouselOpen(false)}
			/>
		</div>
	);
};
