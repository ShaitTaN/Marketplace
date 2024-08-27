import {Card, Flex, Typography} from 'antd';
import clsx from 'clsx';
import React, {useState} from 'react';
import StarIcon from '../../assets/icons/star.svg';
import {Badge} from '../../ui/Badge/Badge';
import {toMoneyFormat} from '../../utils/toMoneyFormat';
import classes from './styles.module.scss';
import {ImageDisplay} from '../ImageDisplay/ImageDisplay';
import {Like} from '../../ui/Like/Like';

type statuses = 'new' | 'exclusive' | 'discount' | 'outOfStock';

interface Props {
	price: number | string;
	oldPrice?: string;
	rating?: number | string;
	title: string;
	commentsCount?: number;
	discount?: number;
	statuses?: statuses[];
	className?: string;
	imgSrc?: string;
	extraContent?: React.ReactNode;
	extraImgContent?: React.ReactNode;
	extraImgContentStyles?: React.CSSProperties;
	width?: string | number;
	imgHeight?: string | number;
	isActiveHeart?: boolean;
}

export const ProductCard = ({
	price,
	oldPrice,
	rating,
	commentsCount,
	title,
	className,
	extraContent,
	discount,
	statuses,
	extraImgContent,
	extraImgContentStyles,
	imgSrc,
	width = 324,
	imgHeight = 328,
	isActiveHeart = false,
}: Props) => {
	const [activeHeart, setActiveHeart] = useState(isActiveHeart);
	return (
		<Card
			className={clsx(classes.card, className && className)}
			cover={
				<div className={classes.imgWrapper}>
					<div style={{height: imgHeight}}>
						<ImageDisplay url={imgSrc!} />
						<div className={classes.extraImgContent} style={extraImgContentStyles}>
							{extraImgContent && extraImgContent === 'Like' && (
								<Like handleClick={setActiveHeart} isLikedProps={activeHeart} borderWhiteActive />
							)}
						</div>
					</div>
					<div className={classes.statuses}>
						{statuses?.map((status, index) => (
							<Badge key={index} type={status} value={status === 'discount' ? discount : status} />
						))}
					</div>
				</div>
			}
			style={{width: width}}
		>
			<div className={classes.content}>
				<Flex justify='space-between' align='center'>
					<Flex align='center' gap={8}>
						<b className={classes.price}>{toMoneyFormat(+price)}</b>
						{oldPrice && <span className={classes.oldPrice}>{toMoneyFormat(+oldPrice)}</span>}
					</Flex>
					<Flex justify='space-between' align='center' gap={2}>
						{!!rating && (
							<>
								<StarIcon style={{width: 13, height: 13}} />
								<span className={classes.rating}>{rating}</span>
							</>
						)}
						{!!commentsCount && <span className={classes.commentsCount}>({commentsCount})</span>}
					</Flex>
				</Flex>
				<Typography.Paragraph className={classes.title} ellipsis={{rows: 1}}>
					{title}
				</Typography.Paragraph>
			</div>
			{extraContent}
		</Card>
	);
};
