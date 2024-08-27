import {Flex, Typography} from 'antd';
import classes from './styles.module.scss';
import {useState} from 'react';
import {ButtonBase} from '../../../../../../ui/Button/ButtonBase';
import {PunctTitle} from './PunctTitle';
import {InputSearch} from '../../../../../../ui/Input/InputSearch';

const titlePuncts = ['СДЭК', 'Почта России', 'Boxberry', '5Post', 'DPD'];
const data = [
	{label: 'Мячковский б-р, 18к1'},
	{label: 'Мячковский б-р, 17'},
	{label: 'Мячковский б-р, 14'},
	{label: 'Мячковский б-р, 10к2'},
	{label: 'Тестирование'},
];

export const PickUpTabPanel = () => {
	const [value, setValue] = useState('');
	const [isSelectedPoint, setIsSelectedPoint] = useState(false);
	return (
		<Flex vertical gap={24} className={classes.wrapper}>
			<InputSearch
				setIsSelectedPoint={setIsSelectedPoint}
				value={value}
				setValue={setValue}
				data={data}
				inputSize='normal'
				placeholder='Найти адрес'
			/>
			<Flex vertical gap={16} className={classes.content}>
				<Typography.Text className={classes.title}>Пункты выдачи</Typography.Text>
				<Flex vertical gap={12} justify='center'>
					{titlePuncts.map((pointTitle, index) => (
						<PunctTitle key={index} pointTitle={pointTitle} index={index} />
					))}
				</Flex>
				<ButtonBase buttonType='secondary' buttonSize='medium'>
					Применить
				</ButtonBase>
			</Flex>
			{isSelectedPoint && (
				<Flex vertical gap={16} className={classes.content}>
					<Typography.Text className={classes.title}>Москва, {value}</Typography.Text>
					<Flex vertical gap={8}>
						<Typography.Text className={classes.pointTitle}>Почта России 👎</Typography.Text>
						<Flex vertical gap={4}>
							<Typography.Text className={classes.text}>1-4 дня, 300 ₽</Typography.Text>
							<Typography.Text className={classes.text}>Пн — Вс: 9:00 — 21:00</Typography.Text>
							<Typography.Text className={classes.text}>15 минут на проверку товара в пункте выдачи</Typography.Text>
						</Flex>
					</Flex>
					<ButtonBase buttonSize='medium'>Выбрать пункт</ButtonBase>
				</Flex>
			)}
		</Flex>
	);
};
