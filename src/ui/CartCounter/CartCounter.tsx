import {Flex} from 'antd';
import {useState} from 'react';
import MinusIcon from '../../assets/icons/minus.svg';
import PlusIcon from '../../assets/icons/plus.svg';
import classes from './styles.module.scss';
import clsx from 'clsx';

interface Props {
	value: number;
}

export const CartCounter = ({value}: Props) => {
	const [quantity, setQuantity] = useState(value);

	const onIncrement = () => {
		setQuantity(quantity + 1);
	};

	const onDecrement = () => {
		if (quantity <= 1) return;
		setQuantity(quantity - 1);
	};

	return (
		<Flex className={classes.counter} align='center'>
			<div className={clsx({[classes.btn]: true, [classes.disabled]: quantity === 1})} onClick={onDecrement}>
				<MinusIcon />
			</div>
			<div className={classes.count}>{quantity}</div>
			<div className={classes.btn} onClick={onIncrement}>
				<PlusIcon />
			</div>
		</Flex>
	);
};
