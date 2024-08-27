import {Flex, Typography} from 'antd';
import classes from './styles.module.scss';
import {UserName} from './components/UserName';
import {Exit} from './components/Exit';
import {Link} from 'react-router-dom';
import {ActionsBlock} from './components/ActionsBlock';
import {Badge} from '../../../../ui/Badge/Badge';
import {SendInSupport} from './components/SendInSupport';
import {useState} from 'react';
import {Modal} from '../../../../ui/Modal/Modal';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';
import {routesLinksEnum} from '../../../../app/routes';

export const ProfileInfoCard = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const ProfileInfoCardData = [
		{
			title: 'Покупки',
			items: [
				<Link to={routesLinksEnum.baseUserProfile + routesLinksEnum.userProfilePurchasedProducts}>
					Купленные изделия
				</Link>,
				<Link to={'/'}>Возвраты</Link>,
				<Link to={routesLinksEnum.baseUserProfile + routesLinksEnum.userProfileChecks}>Электронные чеки</Link>,
			],
		},
		{
			title: 'Отзывы и вопросы',
			items: [
				<Flex gap={8} align='center'>
					<Link to={routesLinksEnum.baseUserProfile + routesLinksEnum.userProfileReviews}>Отзывы</Link>
					<Badge type='notification' value={14} />
				</Flex>,
				<Flex gap={8} align='center'>
					<Link to={'/'}>Вопросы и ответы</Link>
					<Badge type='notification' value={121} />
				</Flex>,
			],
		},
		{
			title: 'Соц сеть',
			items: [
				<Flex gap={8} align='center'>
					<Link to={'/'}>Чаты</Link>
					<Badge type='notification' value={231} />
				</Flex>,
				<Link to={routesLinksEnum.baseUserProfile + routesLinksEnum.userProfileSubscriptions}>Подписки на бренды</Link>,
				<Link to={routesLinksEnum.baseUserProfile + routesLinksEnum.userProfileSavedPublishs}>
					Сохранённые публикации
				</Link>,
			],
		},
	];
	return (
		<div className={classes.wrapper}>
			<Flex vertical gap={8}>
				<UserName />
				{ProfileInfoCardData.map((item, index) => (
					<ActionsBlock key={index} title={item.title} items={item.items} />
				))}
				<SendInSupport />
				<Exit setIsModalOpen={setIsModalOpen} />
			</Flex>
			<Modal
				centered
				wrapClassName={classes.modal}
				classNames={{content: classes.modalContent, header: classes.modalHeader}}
				footer={() => (
					<Flex gap={8} justify='flex-start' style={{width: '100%'}}>
						<ButtonBase onClick={() => setIsModalOpen(false)}>Отмена</ButtonBase>
						<ButtonBase onClick={() => setIsModalOpen(false)} buttonType='danger'>
							Выйти
						</ButtonBase>
					</Flex>
				)}
				title='Выход из аккаунта'
				width={469}
				open={isModalOpen}
				onCancel={() => setIsModalOpen(false)}
			>
				<Typography.Text className={classes.text}>Вы действительно хотите выйти из аккаунта?</Typography.Text>
			</Modal>
		</div>
	);
};
