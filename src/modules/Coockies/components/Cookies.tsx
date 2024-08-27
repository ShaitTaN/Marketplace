import {useSettingsStore} from '../../../app/store/globalStore';
import {ButtonBase} from '../../../ui/Button/ButtonBase';
import classes from './styles.module.scss';
import {Flex, Typography} from 'antd';

export const Cookies = () => {
	const {showCookies, setShowCookies} = useSettingsStore();

	return (
		<>
			{showCookies && (
				<div className={classes.cookiesWrapper}>
					<Flex className={classes.cookies} vertical gap={12} align='center' justify='center'>
						<Typography.Text>
							Пользуясь нашим сайтом, <br /> вы соглашаетесь с <a href='#'>политикой обработки файлов cookie</a>
						</Typography.Text>
						<ButtonBase buttonType='tertiary' buttonSize='medium' width={200} onClick={() => setShowCookies(false)}>
							ОК
						</ButtonBase>
					</Flex>
				</div>
			)}
		</>
	);
};
