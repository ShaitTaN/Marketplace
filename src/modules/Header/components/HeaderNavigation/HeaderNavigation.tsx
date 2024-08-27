import {Flex} from 'antd';
import {useNavigate} from 'react-router-dom';
import {useModals} from '../../../../app/store/useModals';
import BurgerIcon from '../../../../assets/icons/burger.svg';
import Logo from '../../../../assets/icons/logo.svg';
import SearchIcon from '../../../../assets/icons/search.svg';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';
import {InputWithButton} from '../../../../ui/InputWithButton/InputWithButton';
import {Popover} from '../../../../ui/Popover/Popover';
import {IconsComponent} from './IconsComponent';
import classes from './styles.module.scss';
import {Modals} from '../../../../app/models/Modals';
import {useMainSettings} from '../../../../app/store/mainStore';
import {Modal} from '../../../../ui/Modal/Modal';
import {AuthForm} from '../../../Auth';
import {useState} from 'react';

export const HeaderNavigation = () => {
	const [isLoginOpen, setIsLoginOpen] = useState(false);

	const openModalByName = useModals((state) => state.openModalByName);
	const {isAutenticated, setIsAutenticated} = useMainSettings();

	const navigate = useNavigate();

	return (
		<Flex className={classes.flex} align='center' justify='space-between' gap={27}>
			<Flex align='center'>
				<Logo onClick={() => navigate('/')} style={{cursor: 'pointer'}} />
			</Flex>
			<Flex gap={27} align='center' style={{width: '100%'}}>
				<ButtonBase iconLeft={<BurgerIcon />} onClick={() => openModalByName(Modals.Catalog)}>
					Каталог
				</ButtonBase>
				<InputWithButton
					typeInpWithBtn='search'
					width={'100%'}
					placeholder='Найти авторские изделия'
					icon={<SearchIcon width={20} height={20} />}
				/>
			</Flex>
			<Flex gap={27} align='center' justify='space-between'>
				<IconsComponent isAuth={isAutenticated} />
				{!isAutenticated && (
					<ButtonBase
						onClick={() => {
							setIsLoginOpen(true);
							setIsAutenticated();
						}}
					>
						<Popover
							placement='bottomRight'
							content={
								<p
									style={{
										width: 233,
										margin: 0,
										fontSize: 14,
										fontStyle: 'normal',
										fontWeight: 400,
										lineHeight: '130%',
									}}
								>
									<strong style={{fontWeight: 600, lineHeight: '16px'}}>Войдите или зарегистрируйтесь,</strong>
									<br />
									чтобы покупать авторские изделия и следить за авторами
								</p>
							}
							trigger={'hover'}
						>
							Войти
						</Popover>
					</ButtonBase>
				)}
			</Flex>
			{/* Не забыть убрать */}
			<Modal open={isLoginOpen} onCancel={() => setIsLoginOpen(false)} footer={null} centered>
				<AuthForm />
			</Modal>
		</Flex>
	);
};
