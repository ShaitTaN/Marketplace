import classes from './styles.module.scss';
import {Flex} from 'antd';
import Plus from '../../assets/icons/plus.svg';
import Minus from '../../assets/icons/minus.svg';
import {useState} from 'react';

interface Props {
	value: number;
}

export const BasicCounter = ({value}: Props) => {
	const [quantity, setQuantity] = useState(value);

	const onIncrement = () => {
		setQuantity(quantity + 1);
	};

	const onDecrement = () => {
		if (quantity <= 1) return;
		setQuantity(quantity - 1);
	};

	return (
		<Flex className={classes.basicCounter} gap={19} justify='space-between' align='center'>
			<button type='button' aria-label='минус' className={classes.counterBtn} onClick={onDecrement}>
				<Minus />
			</button>
			<div className={classes.count}>{quantity}</div>
			<button type='button' aria-label='плюс' className={classes.counterBtn} onClick={onIncrement}>
				<Plus />
			</button>
		</Flex>
	);
};
