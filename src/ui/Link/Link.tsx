import {NavLink} from 'react-router-dom';
import classes from './styles.module.scss';
import clsx from 'clsx';

interface Props {
	children: React.ReactNode;
	to?: string;
	component?: 'link' | 'button';
	type?: 'primary' | 'secondary' | 'tertiary';
	size?: 'small' | 'normal' | 'medium' | 'big';
	onClick?: () => void;
	id?: string;
	disabled?: boolean;
}

export const Link = ({
	to,
	type = 'primary',
	size = 'normal',
	component = 'link',
	id,
	children,
	onClick,
	disabled,
}: Props) => {
	if (component === 'button') {
		return (
			<button
				id={id}
				className={clsx({
					[classes.link]: true,
					[classes[type]]: true,
					[classes[size]]: true,
					[classes.disabled]: disabled,
				})}
				onClick={onClick}
			>
				{children}
			</button>
		);
	}

	return (
		<NavLink
			id={id}
			to={to!}
			className={clsx({
				[classes.link]: true,
				[classes[type]]: true,
				[classes[size]]: true,
				[classes.disabled]: disabled,
			})}
		>
			{children}
		</NavLink>
	);
};
