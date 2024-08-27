import clsx from 'clsx';
import classes from './styles.module.scss';

interface Props {
	type: 'new' | 'exclusive' | 'discount' | 'outOfStock' | 'notification' | 'default';
	value?: number | string;
	size?: 'normal' | 'large';
}

export const Badge = ({type = 'default', value, size = 'normal'}: Props) => {
	const returnValue = () => {
		if (type === 'discount') return `– ${value}%`;
		else if (type === 'outOfStock') return 'Нет в наличии';
		else return value;
	};
	return <div className={clsx(classes.badge, classes[size], classes[type])}>{returnValue()}</div>;
};
