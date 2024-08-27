import {Flex, Typography} from 'antd';
import classes from './styles.module.scss';
import { Modal } from '../Modal';
import { ButtonBase } from '../../Button/ButtonBase';

interface Props {
	open: boolean;
	onCancel: () => void;
  onOk: () => void;
  title: string;
  description: string;
  btnOkText: string;
  btnCancelText: string;
}

export const ModalConfirm = ({open, onCancel, onOk, title, description, btnOkText, btnCancelText}: Props) => {
	return (
		<Modal open={open} onCancel={onCancel} centered wrapClassName={classes.modal} footer={null}>
			<Flex vertical gap={24}>
				<Typography.Title className={classes.modalTitle}>{title}</Typography.Title>
				<Typography.Text className={classes.modalText}>
          {description}
				</Typography.Text>
        <Flex gap={8}>
          <ButtonBase onClick={onCancel}>{btnCancelText}</ButtonBase>
          <ButtonBase onClick={onOk} buttonType={'danger'}>{btnOkText}</ButtonBase>
        </Flex>
			</Flex>
		</Modal>
	);
};
