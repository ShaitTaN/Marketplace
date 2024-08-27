import {Flex, Typography} from 'antd';
import classes from './styles.module.scss';
import SuccessIcon from '../../../../assets/icons/success.svg';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';
import {Dispatch, SetStateAction} from 'react';

interface Props {
	onClose: () => void;
	setStep: Dispatch<SetStateAction<number>>;
}

export const ComplaintSuccess = ({onClose, setStep}: Props) => {
	const onReset = () => {
		setStep(0);
		onClose();
	};

	return (
		<Flex vertical gap={24} align='center' className={classes.wrapper}>
			<Flex vertical align='center' className={classes.info}>
				<SuccessIcon style={{marginBottom: '16px'}} />
				<Typography.Text>Спасибо!</Typography.Text>
				<Typography.Text>Ваша жалоба успешно отправлена</Typography.Text>
			</Flex>
			<ButtonBase buttonSize='normal' buttonType='primary' onClick={onReset}>
				Хорошо
			</ButtonBase>
		</Flex>
	);
};
