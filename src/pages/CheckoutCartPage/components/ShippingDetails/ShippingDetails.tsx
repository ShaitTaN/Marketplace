import {Flex, Typography} from 'antd';
import classes from './styles.module.scss';
import ArrowLeft from '../../../../assets/icons/ArrowLeft.svg';
import {Input} from '../../../../ui/Input/Input';

export const ShippingDetails = () => {
	return (
		<Flex vertical gap={24} className={classes.wrapper}>
			<Flex vertical gap={8} className={classes.header}>
				<button className={classes.backButton}>
					<Flex gap={7} align='center'>
						<ArrowLeft width={24} height={24} />
						<Typography.Text>Назад</Typography.Text>
					</Flex>
				</button>
				<Typography.Title level={3}>Оформление доставки</Typography.Title>
			</Flex>
			<Typography.Title level={4}>Получатель</Typography.Title>
			<Flex vertical gap={8} className={classes.fmlField}>
				<Typography.Title level={5}>ФИО</Typography.Title>
				<Input placeholder='Иванов Иван Иванович' />
				<Typography.Text className={classes.descriptionText}>Заказ выдадут только по паспорту</Typography.Text>
			</Flex>
			<Flex gap={24}>
				<Flex vertical gap={8} className={classes.fmlField}>
					<Typography.Title level={5}>Телефон</Typography.Title>
					<Input style={{width: 316}} type='phone' placeholder='+7 999 999 99 99' />
					<Typography.Text className={classes.descriptionText}>На этот номер придёт код выдачи заказа</Typography.Text>
				</Flex>
				<Flex vertical gap={8} className={classes.fmlField}>
					<Typography.Title level={5}>Почта</Typography.Title>
					<Input style={{width: 316}} type='email' placeholder='user@mail.ru' />
					<Typography.Text className={classes.descriptionText}>На этот адрес придёт электронный чек</Typography.Text>
				</Flex>
			</Flex>
		</Flex>
	);
};
