import {Flex, Typography} from 'antd';
import {useState} from 'react';
import {SwiperSlide} from 'swiper/react';
import {Comment as IComment} from '../../../../app/models/Types';
import {CarouselSwiper} from '../../../../components/CarouselSwiper/CarouselSwiper';
import {Comment} from '../../../../components/Comment/Comment';
import {FullScreenCarousel} from '../../../../components/FullScreenCarousel/FullScreenCarousel';
import {ImageDisplay} from '../../../../components/ImageDisplay/ImageDisplay';
import {ReplyModal} from '../../../../components/ReplyModal/ReplyModal';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';
import {Link} from '../../../../ui/Link/Link';
import {ModalConfirm} from '../../../../ui/Modal/ModalConfirm/ModalConfirm';
import {Rate} from '../../../../ui/Rate/Rate';
import classes from './styles.module.scss';

interface Props {
	title: string;
	rate: number;
	date: string;
	description: string;
	imgs: string[];
	productImg: string;
	replies?: IComment[];
}

export const MyReviewBlock = ({title, rate, date, description, imgs, productImg, replies}: Props) => {
	const [showButtons, setShowButtons] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [openRemoveReplyModal, setOpenRemoveReplyModal] = useState(false);
	const [openFullScreenCarousel, setOpenFullScreenCarousel] = useState(false);

	const handleOpenModal = () => {
		setOpenModal(true);
	};
	const handleOpenRemoveReplyModal = () => {
		setOpenRemoveReplyModal(true);
	};
	const handleOpenFullScreenCarousel = () => {
		setOpenFullScreenCarousel(true);
	};
	const handleCloseModal = () => {
		setOpenModal(false);
	};
	const handleCloseRemoveReplyModal = () => {
		setOpenRemoveReplyModal(false);
	};
	const handleCloseFullScreenCarousel = () => {
		setOpenFullScreenCarousel(false);
	};

	const handleMouseEnter = () => {
		setShowButtons(true);
	};

	const handleMouseLeave = () => {
		setShowButtons(false);
	};

	return (
		<div>
			<Flex
				vertical
				gap={24}
				className={classes.myReviewBlockWrapper}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<Flex vertical gap={12}>
					<Flex justify='space-between'>
						<Flex gap={12}>
							<div className={classes.imgWrapper}>
								<ImageDisplay url={productImg} />
							</div>
							<Flex vertical gap={6} justify='center'>
								<Link to={'#'}>
									<Typography.Paragraph ellipsis={{rows: 1}} className={classes.title}>
										{title}
									</Typography.Paragraph>
								</Link>
								<Flex gap={8} align='center'>
									<Rate sizeStars='medium' value={rate} disabled />
									<Typography.Text className={classes.date}>{date}</Typography.Text>
								</Flex>
							</Flex>
						</Flex>
						{showButtons && (
							<Flex gap={8} align='start'>
								<ButtonBase buttonType='secondary' onClick={handleOpenRemoveReplyModal} buttonSize='small'>
									Удалить
								</ButtonBase>
								<ButtonBase buttonSize='small' onClick={handleOpenModal}>
									Редактировать
								</ButtonBase>
							</Flex>
						)}
					</Flex>
					<Flex vertical gap={12} className={classes.wrapperDescription}>
						<Typography.Paragraph ellipsis={{rows: 3}} className={classes.description}>
							{description}
						</Typography.Paragraph>
						<CarouselSwiper slidesPerView={'auto'} spaceBetween={10} style={{margin: 0}} showNavigationButtons>
							{imgs.map((img, index) => (
								<SwiperSlide key={index} className={classes.slideWrapper} onClick={handleOpenFullScreenCarousel}>
									<ImageDisplay url={img} />
								</SwiperSlide>
							))}
						</CarouselSwiper>
					</Flex>
				</Flex>
				{replies && (
					<Flex vertical gap={14}>
						<Flex className={classes.replies} vertical gap={24}>
							{replies?.map((reply, i) => (
								<Comment
									comment={reply}
									key={i}
									isReply
									isProductOwner={reply.authorName === 'Brand Name'}
									hasReplyButton
								/>
							))}
						</Flex>
					</Flex>
				)}
			</Flex>
			<ReplyModal
				isEditModal
				open={openModal}
				onCancel={handleCloseModal}
				title={title}
				ratingValue={rate}
				inputValue={description}
				imgSrc={productImg}
			/>
			<ModalConfirm
				onOk={handleCloseRemoveReplyModal}
				open={openRemoveReplyModal}
				onCancel={handleCloseRemoveReplyModal}
				title='Вы действительно хотите удалить отзыв?'
				description='Ваши отзывы помогают другим покупателям сформировать точное представление об изделии'
				btnOkText='Удалить'
				btnCancelText='Оставить'
			/>
			<FullScreenCarousel open={openFullScreenCarousel} onClose={handleCloseFullScreenCarousel} images={imgs} />
		</div>
	);
};
