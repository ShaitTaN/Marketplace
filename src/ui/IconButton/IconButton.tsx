import classes from './styles.module.scss';
import {Button, ButtonProps} from 'antd';
import clsx from 'clsx';

export const IconButton = ({className, ...props}: ButtonProps) => {
	return (
		<Button shape='circle' className={clsx({[classes.btn]: true}, className)} {...props}>
			{props.children}
		</Button>
	);
};
