import {Flex, Typography} from 'antd';
import {ButtonBase} from '../../ui/Button/ButtonBase';
import {toMoneyFormat} from '../../utils/toMoneyFormat';
import classes from './styles.module.scss';
import clsx from 'clsx';
import {useNavigate} from 'react-router-dom';
import {routesLinksEnum} from '../../app/routes';

interface Props {
	productsCount: number;
	price: number;
	deliveryPrice?: number;
	withDelivery?: boolean;
}

export const CardCartPrice = ({productsCount, price, withDelivery = false, deliveryPrice}: Props) => {
	const path = useNavigate();

	const handleClick = () => {
		path(routesLinksEnum.checkout);
	};
	return (
		<div className={classes.cartPrice}>
			<Flex vertical gap={24}>
				{withDelivery && (
					<Typography.Title level={4} className={classes.title}>
						Ваш заказ
					</Typography.Title>
				)}
				<Flex vertical gap={4}>
					<Flex vertical gap={16}>
						<Flex vertical gap={8}>
							<Flex justify='space-between' align='center'>
								<div className={classes.text}>{productsCount} изделия на сумму</div>
								<span className={clsx(classes.price, withDelivery && classes.priceWithDelivery)}>
									{toMoneyFormat(price)}
								</span>
							</Flex>
							{withDelivery && (
								<Flex justify='space-between' align='center'>
									<div className={classes.text}>Стоимость доставки</div>
									<span className={clsx(classes.price, withDelivery && classes.priceWithDelivery)}>
										{deliveryPrice ? toMoneyFormat(deliveryPrice) : '—'}
									</span>
								</Flex>
							)}
						</Flex>
						{withDelivery && (
							<Flex justify='space-between' align='center'>
								<Typography.Title level={5}>Итого</Typography.Title>
								<span className={classes.price}>
									{deliveryPrice ? toMoneyFormat(deliveryPrice + price) : toMoneyFormat(price)}
								</span>
							</Flex>
						)}
					</Flex>
					{!withDelivery && <div className={classes.helper}>Без учёта стоимости доставки</div>}
				</Flex>
				{withDelivery ? (
					<ButtonBase buttonSize='medium' style={{width: '100%', marginBottom: '8px'}}>
						Перейти к оплате
					</ButtonBase>
				) : (
					<ButtonBase buttonSize='medium' style={{width: '100%', marginBottom: '8px'}} onClick={handleClick}>
						Оформить заказ
					</ButtonBase>
				)}
			</Flex>
			<div className={classes.helper}>
				{!withDelivery ? (
					'Доступные способы оплаты и доставки можно выбрать при оформлении заказа'
				) : (
					<span className={classes.spanWithlink}>
						Нажимая “Оплатить заказ”, вы подтверждаете, что ознакомились и принимаете <a>пользовательское соглашение</a>
					</span>
				)}
			</div>
		</div>
	);
};
