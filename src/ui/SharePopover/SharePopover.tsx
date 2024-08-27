import CopyIcon from '../../assets/icons/copy.svg';
import VKIcon from '../../assets/icons/vk.svg';
import TelegramIcon from '../../assets/icons/telegram.svg';
import classes from './styles.module.scss';
import {Popover} from '../Popover/Popover';
import {Flex, Typography} from 'antd';

interface Props {
	children: React.ReactNode;
}

export const SharePopover = ({children, ...props}: Props) => {
	return (
		<Popover
			placement='top'
			content={
				<Flex justify='center' gap={4} vertical className={classes.popoverContent}>
					<Flex gap={8} align='center' justify='center'>
						<CopyIcon />
						<Typography.Text>Скопировать ссылку</Typography.Text>
					</Flex>
					<Flex gap={8} align='center'>
						<div className={classes.iconWrapper}>
							<VKIcon />
						</div>
						<Typography.Text>Вконтакте</Typography.Text>
					</Flex>
					<Flex gap={8} align='center'>
						<div className={classes.iconWrapper}>
							<TelegramIcon />
						</div>
						<Typography.Text>Telegram</Typography.Text>
					</Flex>
				</Flex>
			}
			{...props}
		>
			{children}
		</Popover>
	);
};
