import {Flex, Typography} from 'antd';
import classes from './styles.module.scss';
import {SwiperSlide} from 'swiper/react';
import {CarouselSwiper} from '../../../../../components/CarouselSwiper/CarouselSwiper';
import {ImageDisplay} from '../../../../../components/ImageDisplay/ImageDisplay';
import {ButtonBase} from '../../../../../ui/Button/ButtonBase';
import {useState} from 'react';
import {CartCheckoutOrderModal} from '../../../../../modules/CartCheckout/components/CartCheckoutOrderModal/CartCheckoutOrderModal';

interface Props {
	title: string;
	products: {
		imgSrc: string;
		price: string;
	}[];
}

export const Order = ({title, products}: Props) => {
	const [showModal, setShowModal] = useState(false);

	const handleShowModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<Flex vertical gap={16} className={classes.wrapper}>
			<Typography.Title level={4}>{title}</Typography.Title>
			<CarouselSwiper slidesPerView={'auto'} spaceBetween={8} btnStyles={{marginTop: '-13px', marginRight: '-23px'}}>
				{products.map((product, index) => (
					<SwiperSlide key={index} style={{width: '152px'}} className={classes.slide}>
						<Flex vertical gap={8} align='start' className={classes.product}>
							<div className={classes.imgWrapper}>
								<ImageDisplay url={product.imgSrc} />
							</div>
							<Typography.Text>{product.price}</Typography.Text>
						</Flex>
					</SwiperSlide>
				))}
			</CarouselSwiper>
			<ButtonBase width={'fit-content'} buttonType='secondary' onClick={handleShowModal}>
				Выбрать способ получения
			</ButtonBase>
			<CartCheckoutOrderModal showModal={showModal} handleCloseModal={handleCloseModal} />
		</Flex>
	);
};
