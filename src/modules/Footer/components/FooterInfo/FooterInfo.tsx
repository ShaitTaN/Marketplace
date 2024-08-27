import {Flex, Input, Typography} from 'antd';
import classes from './styles.module.scss';
import {Link} from 'react-router-dom';
import SendIcon from '../../../../assets/icons/send.svg';

const {Title} = Typography;

export const FooterInfo = () => {
	return (
		<Flex className={classes.flex} gap={126}>
			<Flex vertical gap={16}>
				<Title level={5}>Покупателям</Title>
				<Flex vertical gap={12}>
					<Link to={'/'}>Как сделать заказ</Link>
					<Link to={'/'}>Оплата</Link>
					<Link to={'/'}>Доставка</Link>
					<Link to={'/'}>Возврат</Link>
					<Link to={'/'}>Контакты</Link>
					<Link to={'/'}>Безопасность</Link>
					<Link to={'/'}>Политика обработки персональных данных</Link>
					<Link to={'/'}>Поддержка</Link>
				</Flex>
			</Flex>
			<Flex vertical gap={16}>
				<Title level={5}>Компания</Title>
				<Flex vertical gap={12}>
					<Link to={'/'}>О нас</Link>
					<Link to={'/'}>Реквизиты</Link>
					<Link to={'/'}>Новости компании</Link>
					<Link to={'/'}>Контакты</Link>
					<Link to={'/'}>Горячая линия</Link>
					<Link to={'/'}>Правила платформы</Link>
					<Link to={'/'}>Рекламодателям</Link>
					<Link to={'/'}>BugHunt</Link>
				</Flex>
			</Flex>
			<Flex vertical gap={36}>
				<Flex gap={126}>
					<Flex vertical gap={16}>
						<Title level={5}>Брендам</Title>
						<Flex vertical gap={12}>
							<Link to={'/'}>Личный кабинет продавца</Link>
							<Link to={'/'}>Продавайте на Lysende</Link>
							<Link to={'/'}>Документация</Link>
						</Flex>
					</Flex>
					<Flex vertical gap={16}>
						<Title level={5}>Наши соцсети</Title>
						<Flex vertical gap={12}>
							<Link to={'/'}>Вконтакте</Link>
							<Link to={'/'}>Телеграм</Link>
							<Link to={'/'}>YouTube</Link>
						</Flex>
					</Flex>
				</Flex>
				<Flex vertical gap={12}>
					<Title level={5}>Подписаться на новости</Title>
					<Input
						className={classes.input}
						placeholder='Введите e-mail'
						suffix={<SendIcon width={24} height={24} className={classes.icon} />}
					/>
				</Flex>
				<Typography.Text  className={classes.text}>
					2024 © Lysende – зарегистрированный товарный знак ООО «ЛЮСЭНД». На торговой площадке Lysende.ru применяются
					рекомендательные технологии
				</Typography.Text>
			</Flex>
		</Flex>
	);
};
