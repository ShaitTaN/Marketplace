import {Flex} from 'antd';
import clsx from 'clsx';
import {useState} from 'react';
import {Comment as IComment} from '../../../../app/models/Types';
import {Comment} from '../../../../components/Comment/Comment';
import {ReplyField} from '../../../../components/Comment/ReplyField';
import {FullScreenCarousel} from '../../../../components/FullScreenCarousel/FullScreenCarousel';
import {ImageDisplay} from '../../../../components/ImageDisplay/ImageDisplay';
import {ReviewAuthor} from '../ReviewAuthor/ReviewAuthor';
import classes from './styles.module.scss';

interface ReviewItem {
	authorName: string;
	avaSrc?: string;
	date: string;
	text: string;
	rate?: number;
	imagesSrc?: string[];
	replies?: IComment[];
}

interface Props {
	review: ReviewItem;
	isBrandProfile?: boolean;
}

export const ReviewItem = ({review: review, isBrandProfile = false}: Props) => {
	const [openFullScreenCarousel, setOpenFullScreenCarousel] = useState({isOpen: false, activeImgIndex: 0});
	const [isReplyInputVisible, setIsReplyInputVisible] = useState(false);
	const [replyText, setReplyText] = useState('');

	const onClickReply = () => {
		setIsReplyInputVisible(true);
	};

	const onCloseReply = () => {
		setIsReplyInputVisible(false);
		setReplyText('');
	};

	console.log(openFullScreenCarousel);

	return (
		<Flex justify='space-between' vertical gap={12} className={classes.review}>
			<Flex vertical gap={8}>
				<ReviewAuthor
					name={review.authorName}
					date={review.date}
					rate={review.rate}
					avaSrc={review.avaSrc}
					isBrandProfile={isBrandProfile}
				/>
				<div className={clsx(classes.text, isBrandProfile && classes.brandText)}>{review.text}</div>
			</Flex>
			<Flex className={clsx(classes.images, isBrandProfile && classes.brandImages)} gap={8}>
				{review.imagesSrc?.map((image, i) => (
					<div
						className={clsx(classes.item)}
						key={image}
						onClick={() => setOpenFullScreenCarousel({isOpen: true, activeImgIndex: i})}
					>
						<ImageDisplay url={image} />
					</div>
				))}
			</Flex>
			{!isBrandProfile && (
				<>
					<Flex vertical gap={12}>
						<button className={classes.reply} onClick={onClickReply}>
							Ответить на отзыв
						</button>

						{isReplyInputVisible && (
							<ReplyField value={replyText} onChange={setReplyText} onClickCancel={onCloseReply} />
						)}
					</Flex>
					{review.replies && (
						<Flex className={classes.replies} vertical gap={24}>
							{review.replies?.map((reply, i) => (
								<Comment
									comment={reply}
									key={i}
									isReply
									isProductOwner={reply.authorName === 'Brand Name'}
									hasReplyButton
								/>
							))}
						</Flex>
					)}
				</>
			)}
			<FullScreenCarousel
				open={openFullScreenCarousel.isOpen}
				onClose={() => setOpenFullScreenCarousel({isOpen: false, activeImgIndex: 0})}
				images={review.imagesSrc || []}
				activeImgIndex={openFullScreenCarousel.activeImgIndex}
			/>
		</Flex>
	);
};
