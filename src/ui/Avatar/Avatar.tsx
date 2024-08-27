import {Avatar as AvatarAntd, AvatarProps} from 'antd';
import classes from './styles.module.scss';
import clsx from 'clsx';

interface Props extends AvatarProps {
	avatarType?: 'bordered' | 'not-bordered';
	avatarSize?: 'small' | 'normal' | 'medium' | 'large';
}

export const Avatar = ({
	icon,
	avatarSize = 'medium',
	avatarType = 'bordered',
	className,
	children,
	...props
}: Props) => {
	return (
		<div
			className={clsx({
				[classes.avatarWrapper]: true,
				[classes[avatarType]]: true,
				[classes[avatarSize]]: avatarType !== 'not-bordered',
			})}
		>
			<AvatarAntd
				className={clsx({[classes.avatar]: true, [classes[avatarSize]]: true}, className)}
				icon={icon}
				{...props}
			>
				{children}
			</AvatarAntd>
		</div>
	);
};
