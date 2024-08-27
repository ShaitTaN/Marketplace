import {Flex, Typography} from 'antd';
import classes from './styles.module.scss';
import {Avatar} from '../../../../ui/Avatar/Avatar';
import {CardActions} from '../CardActions/CardActions';
import {CardActionsProps, CardInfoProps} from '../types/Types';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';
import {useState} from 'react';
import {ImageDisplay} from '../../../ImageDisplay/ImageDisplay';
import {CarouselSwiper} from '../../../CarouselSwiper/CarouselSwiper';
import {SwiperSlide} from 'swiper/react';
import clsx from 'clsx';

interface Props extends CardInfoProps, CardActionsProps {}

export const CardInfo = ({
	title,
	description,
	avaSrc,
	imgSrc,
	likesCount,
	commentsCount,
	btnRedirectToProduct,
	shortened,
	imgHeight,
	hasSubscribe,
	hasAddToArchive,
	imgSrcArray,
}: Props) => {
	const [subscribed, setSubscribed] = useState(false);
	const [onEnterImage, setOnEnterImage] = useState(false);
	const onSubscribe = () => setSubscribed(!subscribed);

	const onEnterImageHandler = () => setOnEnterImage(true);

	const onLeaveImageHandler = () => setOnEnterImage(false);

	return (
		<Flex vertical gap={hasSubscribe ? 8 : 12} className={classes.cardInfo}>
			{!shortened && (
				<Flex justify='space-between' align='center'>
					<Flex gap={10}>
						<Avatar avatarSize='small' avatarType='not-bordered' src={avaSrc} />
						<Flex vertical className={classes.meta}>
							<Typography.Paragraph ellipsis={{rows: 1}} className={clsx(classes.title, 'titleNotCopy')}>
								{title}
							</Typography.Paragraph>
							<Typography.Text className={classes.description}>{description}</Typography.Text>
						</Flex>
					</Flex>
					{hasSubscribe && (
						<ButtonBase
							buttonSize='medium'
							buttonType={subscribed ? 'secondary' : 'primary'}
							width={200}
							onClick={onSubscribe}
						>
							{subscribed ? 'Вы подписаны' : 'Подписаться'}
						</ButtonBase>
					)}
				</Flex>
			)}
			{imgSrcArray && imgSrcArray.length > 0 ? (
				<div onMouseEnter={onEnterImageHandler} onMouseLeave={onLeaveImageHandler}>
					<CarouselSwiper withPagination showNavigationButtons={onEnterImage}>
						{imgSrcArray.map((url, index) => (
							<SwiperSlide key={index}>
								<div style={{height: imgHeight}}>
									<ImageDisplay url={url} />
								</div>
							</SwiperSlide>
						))}
					</CarouselSwiper>
				</div>
			) : (
				<div style={{height: imgHeight}}>
					<ImageDisplay url={imgSrc!} />
				</div>
			)}

			<CardActions
				commentsCount={commentsCount}
				likesCount={likesCount}
				btnRedirectToProduct={btnRedirectToProduct}
				hasAddToArchive={hasAddToArchive}
			/>
		</Flex>
	);
};
