import {Flex, Typography} from 'antd';
import {Modal} from '../../ui/Modal/Modal';
import classes from './styles.module.scss';
import {CarouselSwiper} from '../CarouselSwiper/CarouselSwiper';
import {ImageDisplay} from '../ImageDisplay/ImageDisplay';
import {Rate} from '../../ui/Rate/Rate';
import {Input} from '../../ui/Input/Input';
import {ButtonBase} from '../../ui/Button/ButtonBase';
import {SwiperSlide} from 'swiper/react';
import {useEffect, useState} from 'react';
import clsx from 'clsx';

interface Props extends Edit {
	open: boolean;
	onCancel: () => void;
	awaitingProducts?: number;
	imgSrc?: string;
	title: string;
	imgsArr?: string[];
	cardIndex?: number;
	isEditModal?: boolean;
}

interface Edit {
	inputValue?: string;
	ratingValue?: number;
	imagesUploaded?: string[];
}

export const ReplyModal = ({
	open,
	onCancel,
	awaitingProducts,
	imgSrc,
	title,
	imgsArr,
	cardIndex,
	isEditModal = false,
	inputValue,
	ratingValue,
	imagesUploaded,
}: Props) => {
	const [productsCount, setProductsCount] = useState(awaitingProducts || 0);
	const [currentActiveSlide, setCurrentActiveSlide] = useState(cardIndex || 0);

	const handleChangeSlide = (index: number) => {
		setCurrentActiveSlide(index);
	};

	useEffect(() => {
		setCurrentActiveSlide(cardIndex!);
	}, [cardIndex]);

	return (
		<Modal open={open} onCancel={onCancel} centered wrapClassName={classes.modal} footer={null}>
			<Flex vertical gap={24} className={classes.container}>
				<Flex vertical gap={8} className={classes.flexDiv}>
					<Typography.Title className={classes.modalTitle}>
						{!isEditModal ? 'Напишите отзыв' : 'Редактировать отзыв'}
					</Typography.Title>
					{productsCount > 0 && (
						<Typography.Text className={classes.topExtraContent}>
							{productsCount} изделий ожидают вашей оценки
						</Typography.Text>
					)}
				</Flex>
				{imgSrc ? (
					<Flex gap={17} align='center' className={classes.flexDiv}>
						<div className={classes.imgWrapper}>
							<ImageDisplay url={imgSrc!} />
						</div>
						<Typography.Text>{title}</Typography.Text>
					</Flex>
				) : (
					<Flex vertical gap={8} className={classes.flexDiv}>
						<CarouselSwiper slidesPerView={'auto'} btnType='small' spaceBetween={8}>
							{imgsArr!.map((img, index) => (
								<SwiperSlide
									key={index}
									className={clsx({[classes.slide]: true, [classes.slideActive]: index === currentActiveSlide})}
									onClick={() => handleChangeSlide(index)}
								>
									<ImageDisplay url={img} styleImg={{borderRadius: '4px'}} />
								</SwiperSlide>
							))}
						</CarouselSwiper>
						<Typography.Text>{title}</Typography.Text>
					</Flex>
				)}
				<Flex vertical gap={12} className={classes.flexDiv}>
					<Typography.Text className={classes.subTitle}>Поставьте оценку</Typography.Text>
					<Rate sizeStars='large' value={ratingValue} />
					<Typography.Text className={classes.description}>
						Если качество покупки вас не устроило, можете поставить только оценку. Остальные поля — не обязательны.
					</Typography.Text>
				</Flex>
				<Flex vertical gap={12} className={classes.flexDiv}>
					<Typography.Text className={classes.subTitle}>Расскажите, как вам изделие?</Typography.Text>
					<Input.TextArea value={inputValue} autoSize={{minRows: 5, maxRows: 6}} />
				</Flex>
				<Flex vertical gap={12} className={classes.flexDiv}>
					<Typography.Text className={classes.subTitle}>Добавьте до 5 фотографий</Typography.Text>
					<div className={classes.upload}>{imagesUploaded}</div>
				</Flex>
				<Flex vertical gap={8} className={classes.flexDiv}>
					<ButtonBase onClick={() => setProductsCount(productsCount - 1)} buttonSize='large' style={{maxWidth: '100%'}}>
						{!isEditModal ? 'Отправить' : 'Готово'}
					</ButtonBase>
					<Typography.Text className={classes.description}>
						Размещая отзыв, вы соглашаетесь с использованием отзыва на сторонних ресурсах
					</Typography.Text>
				</Flex>
			</Flex>
		</Modal>
	);
};
