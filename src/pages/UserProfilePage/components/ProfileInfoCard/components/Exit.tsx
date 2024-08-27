import {Flex, Typography} from 'antd';
import classes from '../styles.module.scss';
import ExitIcon from '../../../../../assets/icons/exit.svg';

interface Props {
	setIsModalOpen: (value: boolean) => void;
}

export const Exit = ({setIsModalOpen}: Props) => {
	return (
		<div onClick={() => setIsModalOpen(true)} className={classes.textWithImgWrapper}>
			<Flex gap={4} align='center'>
				<ExitIcon />
				<Typography.Text className={classes.exitText}>Выйти из аккаунта</Typography.Text>
			</Flex>
		</div>
	);
};
