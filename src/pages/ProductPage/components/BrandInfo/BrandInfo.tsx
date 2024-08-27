import classes from './styles.module.scss';
import {Flex} from 'antd';
import {CarouselSwiper} from '../../../../components/CarouselSwiper/CarouselSwiper';
import {useState} from 'react';
import {SwiperSlide} from 'swiper/react';
import {ImageDisplay} from '../../../../components/ImageDisplay/ImageDisplay';
import {FullScreenCarousel} from '../../../../components/FullScreenCarousel/FullScreenCarousel';

export const BrandInfo = () => {
	const [storyCarouselShow, setStoryCarouselShow] = useState(false);
	const [conceptCarouselShow, setConceptCarouselShow] = useState(false);
	const [isFullScreenHistoryOpen, setIsFullHistoryOpen] = useState(false);
	const [isFullScreenConceptOpen, setIsFullConseptOpen] = useState(false);

	const onShowStoryCarousel = (nameOfBlock: string) => {
		nameOfBlock === 'story' ? setStoryCarouselShow(true) : setConceptCarouselShow(true);
	};

	const onHideStoryCarousel = (nameOfBlock: string) => {
		nameOfBlock === 'story' ? setStoryCarouselShow(false) : setConceptCarouselShow(false);
	};

	return (
		<Flex vertical className={classes.brandInfo} gap={24}>
			<Flex vertical gap={16} className={classes.block}>
				<h3>История бренда</h3>
				<div
					style={{height: '459px'}}
					onMouseEnter={() => onShowStoryCarousel('story')}
					onMouseLeave={() => onHideStoryCarousel('story')}
				>
					<CarouselSwiper withPagination showNavigationButtons={storyCarouselShow}>
						{Array(6)
							.fill(0)
							.map((_, index) => (
								<SwiperSlide key={index} style={{cursor: 'pointer'}} onClick={() => setIsFullHistoryOpen(true)}>
									<ImageDisplay url='fasdasd' />
								</SwiperSlide>
							))}
					</CarouselSwiper>
				</div>
				<p>
					Наша история началась с простой идеи создать гардероб, который обладает красотой не только на поверхности, но
					и в самой сути. Мы верим, что природа – самый великолепный дизайнер, поэтому все наши изделия изготавливаются
					исключительно из натуральных материалов, используя принципы эко-френдли дизайна.
				</p>
			</Flex>
			<Flex vertical gap={16} className={classes.block}>
				<h3>Концепция изделия</h3>
				<div
					style={{height: '459px'}}
					onMouseEnter={() => onShowStoryCarousel('concept')}
					onMouseLeave={() => onHideStoryCarousel('concept')}
				>
					<CarouselSwiper withPagination showNavigationButtons={conceptCarouselShow}>
						{Array(6)
							.fill(0)
							.map((_, index) => (
								<SwiperSlide key={index} style={{cursor: 'pointer'}} onClick={() => setIsFullConseptOpen(true)}>
									<ImageDisplay url='fasdas' />
								</SwiperSlide>
							))}
					</CarouselSwiper>
				</div>
				<Flex vertical gap={10}>
					<p>
						Комбинация встречных и бантовых складок создают эффект бумажности, подчеркивая Вашу нежность и лёгкость.
					</p>
					<p>Структура ткани гладкая, шелковистая на ощупь.</p>
					<p>Подойдет как для повседневной прогулки, так и для посиделок на летней веранде.</p>
				</Flex>
			</Flex>
			<FullScreenCarousel
				open={isFullScreenHistoryOpen}
				onClose={() => setIsFullHistoryOpen(false)}
				images={[
					'https://wallpapers.com/images/featured/solid-grey-ew5fya1gh2bgc49b.jpg',
					'https://wallpapers.com/images/featured/solid-grey-ew5fya1gh2bgc49b.jpg',
					'https://wallpapers.com/images/featured/solid-grey-ew5fya1gh2bgc49b.jpg',
					'https://wallpapers.com/images/featured/solid-grey-ew5fya1gh2bgc49b.jpg',
					'https://wallpapers.com/images/featured/solid-grey-ew5fya1gh2bgc49b.jpg',
				]}
			/>
			<FullScreenCarousel
				open={isFullScreenConceptOpen}
				onClose={() => setIsFullConseptOpen(false)}
				images={[
					'https://wallpapers.com/images/featured/solid-grey-ew5fya1gh2bgc49b.jpg',
					'https://wallpapers.com/images/featured/solid-grey-ew5fya1gh2bgc49b.jpg',
					'https://wallpapers.com/images/featured/solid-grey-ew5fya1gh2bgc49b.jpg',
					'https://wallpapers.com/images/featured/solid-grey-ew5fya1gh2bgc49b.jpg',
					'https://wallpapers.com/images/featured/solid-grey-ew5fya1gh2bgc49b.jpg',
				]}
			/>
		</Flex>
	);
};
