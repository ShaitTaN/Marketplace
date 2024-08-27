import {Button} from 'antd';
import classes from './styles.module.scss';
import {ButtonProps} from 'antd';
import clsx from 'clsx';

interface Props extends ButtonProps {
	buttonType?: 'primary' | 'secondary' | 'tertiary' | 'danger';
	buttonSize?: 'small' | 'normal' | 'medium' | 'large' | 'megalarge';
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
	width?: number | string;
}

export const ButtonBase = ({
	children,
	buttonType = 'primary',
	buttonSize = 'normal',
	iconLeft,
	iconRight,
	disabled,
	width,
	...props
}: Props) => {
	return (
		<Button
			style={{width: width}}
			className={clsx({
				[classes.btnBase]: true,
				[classes[buttonSize]]: true,
				[classes[buttonType]]: true,
				[classes.disabled]: disabled,
				[classes.withLeftIcon]: iconLeft,
				[classes.withRightIcon]: iconRight,
			})}
			type='default'
			{...props}
		>
			{iconLeft && <div className={clsx(classes.icon, classes.iconLeft)}>{iconLeft}</div>}
			{children}
			{iconRight && <div className={clsx(classes.icon, classes.iconRight)}>{iconRight}</div>}
		</Button>
	);
};
