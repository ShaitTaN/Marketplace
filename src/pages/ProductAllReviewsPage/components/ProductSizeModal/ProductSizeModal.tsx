import {Flex, Typography} from 'antd';
import {Link} from '../../../../ui/Link/Link';
import {Modal} from '../../../../ui/Modal/Modal';
import {RadioGroup} from '../../../../ui/RadioGroup/Radio';
import classes from './styles.module.scss';

interface Props {
	open: boolean;
	value: string;
	onChange: (value: string) => void;
	onClose: () => void;
	onClickTableSizes: () => void;
}

export const ProductSizeModal = ({open, onClose, value, onChange, onClickTableSizes}: Props) => {
	const onChangeRadio = (value: string) => {
		onChange(value);
		onClose();
	};

	return (
		<Modal open={open} onCancel={onClose} footer={null} centered>
			<Flex vertical gap={24} style={{padding: '24px'}} className={classes.wrapper}>
				<Typography className={classes.title}>Выберите размер</Typography>
				<Flex vertical gap={12}>
					<Link component='button' onClick={onClickTableSizes}>
						Таблица размеров
					</Link>
					<RadioGroup
						radioButtons={[{value: 'XS'}, {value: 'S'}, {value: 'M'}, {value: 'L'}, {value: 'XL', disabled: true}]}
						gap={8}
						value={value}
						onChange={(e) => onChangeRadio(e.target.value)}
					/>
				</Flex>
			</Flex>
		</Modal>
	);
};
