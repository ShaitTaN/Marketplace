import {Flex, Typography} from 'antd';
import {Avatar} from '../../../../../ui/Avatar/Avatar';
import classes from '../styles.module.scss';
import {Link} from 'react-router-dom';
import CameraIcon from '../../../../../assets/icons/camera.svg';
import {useState} from 'react';

export const UserName = () => {
	const [isHover, setIsHover] = useState(false);
	return (
		<Flex gap={12} className={classes.userNameWrapper}>
			<div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
				<Avatar avatarType={'not-bordered'} avatarSize={'normal'} className={classes.userAvatar}>
					{isHover && <CameraIcon />}
				</Avatar>
			</div>
			<Flex vertical gap={4} justify='center'>
				<Typography.Text className={classes.userName}>Имя Фамилия</Typography.Text>
				<Link to={'/'} className={classes.editProfile}>
					Редактировать профиль
				</Link>
			</Flex>
		</Flex>
	);
};
