import classes from './styles.module.scss';
import {Card, Flex, Typography} from 'antd';
import {Rate} from '../../../../ui/Rate/Rate';
import {Checkbox} from '../../../../ui/Checkbox/Checkbox';
import {useState} from 'react';
import {numberDeclination} from '../../../../utils/numberDeclination';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';

interface Props {
	productMiddleRate?: string;
	starsRate?: number;
	totalRate?: number;
	isProductOrderedByUser?: boolean;
	name?: string;
	handleOpenModal?: () => void;
}

const data = [
	{
		value: 5,
		quantity: 32,
		id: 'excellent',
	},
	{
		value: 4,
		quantity: 51,
		id: 'good',
	},
	{
		value: 3,
		quantity: 4,
		id: 'satisfactory',
	},
	{
		value: 2,
		quantity: 1,
		id: 'belowAverage',
	},
	{
		value: 1,
		quantity: 1,
		id: 'fail',
	},
];

export const ReviewsRating = ({
	isProductOrderedByUser = false,
	productMiddleRate = '4,2',
	starsRate = 4,
	totalRate = 132,
	name = 'изделия',
	handleOpenModal,
}: Props) => {
	const reviews = ['отзыв', 'отзыва', 'отзывов'];
	const [isFotoFilterChecked, setIsFotoFilterChecked] = useState(false);
	const [isRateFilterChecked, setIsRateFilterChecked] = useState<{[key: string]: boolean}>({});

	const handleChangeRateFilter = (id: string) => {
		setIsRateFilterChecked((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	return (
		<Card className={classes.ratingCard} bordered={false}>
			<Flex vertical gap={24}>
				<Flex vertical gap={8}>
					<div className={classes.productRate}>
						<Typography.Text className={classes.rate}>{productMiddleRate}</Typography.Text>
						<Rate sizeStars='medium' disabled value={starsRate} />
					</div>
					<Typography.Text className={classes.middleRate}>
						Средний рейтинг {name}. Всего {totalRate} оценки
					</Typography.Text>
				</Flex>
				<Flex className={classes.photoFilter} align='center' gap={12}>
					<Checkbox
						checked={isFotoFilterChecked}
						size='small'
						onChange={() => setIsFotoFilterChecked(!isFotoFilterChecked)}
					/>
					<Typography.Text className={classes.title}>С фотографиями</Typography.Text>
				</Flex>
				<Flex vertical gap={12} className={classes.rateFilter}>
					<Typography.Text className={classes.title}>Отзывы с оценкой</Typography.Text>
					{data.map((item, index) => (
						<Flex key={index} gap={16} align='center'>
							<Flex gap={12} align='center'>
								<Checkbox
									checked={isRateFilterChecked[item.id] || false}
									size='small'
									onChange={() => handleChangeRateFilter(item.id)}
								/>
								<Rate sizeStars='medium' disabled value={item.value} />
							</Flex>
							<Typography.Text className={classes.reviewCount}>
								{item.quantity} {numberDeclination(item.quantity, reviews)}
							</Typography.Text>
						</Flex>
					))}
				</Flex>
				{!isProductOrderedByUser ? (
					<Typography.Text className={classes.rateInfo}>
						Отзывы могут оставлять только те, кто купил изделие. Так мы формируем честный рейтинг
					</Typography.Text>
				) : (
					<ButtonBase buttonSize='medium' buttonType='primary' onClick={handleOpenModal}>
						Оставить отзыв
					</ButtonBase>
				)}
			</Flex>
		</Card>
	);
};
