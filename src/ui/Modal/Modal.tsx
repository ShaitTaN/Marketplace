import {Modal as AntdModal, ModalProps} from 'antd';
import CloseIcon from '../../assets/icons/close.svg';
import classes from './styles.module.scss';
import clsx from 'clsx';

interface Props extends ModalProps {
	fullScreen?: boolean;
}

export const Modal = ({fullScreen = false, children, width, ...props}: Props) => {
	return (
		<AntdModal
			{...props}
			closeIcon={<CloseIcon />}
			styles={{mask: {backgroundColor: 'rgba(0, 0, 0, 0.85)'}}}
			className={clsx({[classes.modal]: true, [classes.fullScreen]: fullScreen})}
			width={width || 'auto'}
		>
			{children}
		</AntdModal>
	);
};
