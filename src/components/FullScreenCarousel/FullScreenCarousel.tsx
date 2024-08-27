import classes from './styles.module.scss';
import {Modal} from '../../ui/Modal/Modal';
import {Flex} from 'antd';
import {ImageDisplay} from '../ImageDisplay/ImageDisplay';
import {IconButton} from '../../ui/IconButton/IconButton';
import ArrowLeft from '../../assets/icons/ArrowLeft.svg';
import ArrowRight from '../../assets/icons/ArrowRight.svg';
import {useState} from 'react';
import clsx from 'clsx';

interface Props {
	open: boolean;
	onClose: () => void;
	images: string[];
	activeImgIndex?: number;
}

export const FullScreenCarousel = ({open, onClose, images, activeImgIndex = 0}: Props) => {
	const [activeIndex, setActiveIndex] = useState(activeImgIndex);
	const [isAnimating, setIsAnimating] = useState(false);

	console.log('activeIndex', activeImgIndex);

	const onImageChange = (index: number) => {
		if (!isAnimating) {
			setIsAnimating(true);
			setTimeout(() => {
				setActiveIndex(index);
				setIsAnimating(false);
			}, 300);
		}
	};

	const handleCloseModal = () => {
		setActiveIndex(0);
		onClose();
	};

	return (
		<Modal open={open} footer={null} onCancel={handleCloseModal} mask={false} fullScreen={true}>
			<Flex className={classes.wrapper}>
				<div className={classes.gallery}>
					{images?.map((image, index) => (
						<div
							key={index}
							className={clsx({[classes.miniCard]: true, [classes.active]: activeIndex === index})}
							onClick={() => onImageChange(index)}
						>
							<ImageDisplay url={image} />
						</div>
					))}
				</div>
				<div className={classes.bigCard}>
					<IconButton
						icon={<ArrowLeft />}
						className={classes.swipeBtn}
						style={{left: '-72px'}}
						onClick={() => onImageChange(activeIndex === 0 ? images.length - 1 : activeIndex - 1)}
					/>
					<ImageDisplay
						url={images[activeIndex]}
						classNameImg={clsx({[classes.mainImg]: true, [classes.animation]: isAnimating})}
						classNameGrayDiv={clsx({[classes.mainImg]: true, [classes.animation]: isAnimating})}
					/>
					<IconButton
						icon={<ArrowRight />}
						className={classes.swipeBtn}
						style={{right: '-72px'}}
						onClick={() => onImageChange(activeIndex === images.length - 1 ? 0 : activeIndex + 1)}
					/>
				</div>
			</Flex>
		</Modal>
	);
};
