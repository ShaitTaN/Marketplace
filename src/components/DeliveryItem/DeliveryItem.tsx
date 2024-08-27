import {Flex, Typography} from 'antd';
import {ButtonBase} from '../../ui/Button/ButtonBase';
import classes from './styles.module.scss';
import {CarouselSwiper} from '../CarouselSwiper/CarouselSwiper';
import {SwiperSlide} from 'swiper/react';
import {ImageDisplay} from '../ImageDisplay/ImageDisplay';
import {toMoneyFormat} from '../../utils/toMoneyFormat';
import {Copy} from '../Copy/Copy';
import {Link} from '../../ui/Link/Link';

interface Props {
	title: string;
	id: string;
	date: string;
	status: string;
	delivery: string;
	trackingId: string | undefined;
	paid: string | null;
	products: string[];
	archived?: boolean;
}

export const DeliveryItem = ({
	title,
	id,
	date,
	status,
	delivery,
	trackingId,
	paid,
	products,
	archived = false,
}: Props) => {
	return (
		<Flex vertical gap={16} className={classes.wrapper}>
			{archived ? (
				<Flex gap={12} align='center'>
					<Link component='button' size='big'>
						<div className={'titleNotCopy'}>
							Заказ от {date}, {title}
						</div>
					</Link>
					<Typography.Text className={classes.id}>ID: {id}</Typography.Text>
				</Flex>
			) : (
				<Flex gap={12} align='center'>
					<Link component='button' size='big'>
						<div className={'titleNotCopy'}>Заказ {title}</div>
					</Link>
					<Typography.Text className={classes.id}>
						ID: {id}, {date}
					</Typography.Text>
				</Flex>
			)}
			<Flex vertical gap={8} className={classes.info}>
				<Typography.Text>
					<b>Статус:</b> {status}
				</Typography.Text>
				<Typography.Text>
					<b>Доставка:</b> {delivery}
				</Typography.Text>
				{trackingId && (
					<Flex gap={8} align='center' className={classes.trackInfo}>
						<b>Трек-номер для отслеживания:</b> <Copy text={trackingId} />
					</Flex>
				)}
			</Flex>
			<Flex vertical gap={8}>
				<CarouselSwiper slidesPerView={'auto'} spaceBetween={10} showNavigationButtons>
					{products.map((product, index) => (
						<SwiperSlide key={index} className={classes.slide}>
							<ImageDisplay url={product} classNameImg={classes.img} classNameGrayDiv={classes.grayDiv} />
						</SwiperSlide>
					))}
				</CarouselSwiper>
				{paid ? (
					<Typography.Text className={classes.payInfo}>
						Оплачено <b>{toMoneyFormat(+paid)}</b>
					</Typography.Text>
				) : (
					<Flex gap={8} align='center' className={classes.payInfo}>
						<Typography.Text className={classes.timer}>14:59</Typography.Text>
						<Typography.Text className={classes.descriptionText}>
							Оплатите заказ, иначе он исчезнет через 15 минут после оформления
						</Typography.Text>
					</Flex>
				)}
			</Flex>
			{!archived && <ButtonBase width={'fit-content'}>{paid ? 'Подтвердить получение' : 'Оплатить заказ'}</ButtonBase>}
		</Flex>
	);
};
