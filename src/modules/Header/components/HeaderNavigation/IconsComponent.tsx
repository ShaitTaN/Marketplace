import {ClickableIcon} from '../../../../ui/ClickableIcon/ClickableIcon';
import DeliveryIcon from '../../../../assets/icons/delivery.svg';
import HeartIcon from '../../../../assets/icons/heartNormal.svg';
import BasketIcon from '../../../../assets/icons/basket.svg';
import ProfileIcon from '../../../../assets/icons/profile.svg';
import {Flex} from 'antd';
import {useNavigate} from 'react-router-dom';
import {routesLinksEnum} from '../../../../app/routes';
import classes from './styles.module.scss';

export const IconsComponent = ({isAuth}: {isAuth: boolean}) => {
	const navigate = useNavigate();

	return (
		<Flex gap={isAuth ? 20 : 25} className={classes.flexIcons}>
			<ClickableIcon
				icon={<DeliveryIcon width={24} height={24} />}
				value={'Доставки'}
				onClick={() => navigate(routesLinksEnum.baseUserProfile + routesLinksEnum.userProfileDelivery)}
			/>
			<ClickableIcon
				onClick={() => navigate(routesLinksEnum.favourites)}
				icon={<HeartIcon width={24} height={24} />}
				value={'Избранное'}
			/>
			<ClickableIcon
				icon={<BasketIcon width={24} height={24} />}
				value={'Корзина'}
				onClick={() => navigate(routesLinksEnum.cart)}
			/>
			{isAuth && (
				<ClickableIcon
					icon={<ProfileIcon width={24} height={24} />}
					value={'Профиль'}
					onClick={() => navigate(routesLinksEnum.baseUserProfile + routesLinksEnum.userProfileMain)}
				/>
			)}
		</Flex>
	);
};
