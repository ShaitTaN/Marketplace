import {useState} from 'react';
import HeartNormalIcon from '../../assets/icons/heartNormal.svg';
import classes from './styles.module.scss';
import clsx from 'clsx';

interface Props {
	handleClick?: (value: boolean) => void;
	heartSize?: 'normal' | 'large';
	borderWhiteActive?: boolean;
	isLikedProps?: boolean;
}

export const Like = ({heartSize = 'normal', borderWhiteActive = false, handleClick, isLikedProps}: Props) => {
	const [isLiked, setIsLiked] = useState(isLikedProps || false);

	const handleClickLike = (e: React.MouseEvent) => {
		setIsLiked(!isLiked);
		handleClick && handleClick(!isLiked);
		e.stopPropagation();
	};

	return (
		<div
			onClick={handleClickLike}
			className={clsx({
				[classes.heartIcon]: true,
				[classes.heartActive]: isLiked,
				[classes.borderWhiteActive]: isLiked && borderWhiteActive,
				[classes[heartSize]]: true,
			})}
		>
			<HeartNormalIcon />
		</div>
	);
};
