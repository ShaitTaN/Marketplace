import {Flex} from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
import classes from './styles.module.scss';
import clsx from 'clsx';

interface Props {
	icon: React.ReactNode;
	value: string;
	onClick?: () => void;
	className?: string;
}

export const ClickableIcon = ({icon, value, onClick, className}: Props) => {
	return (
		<Flex vertical align='center' justify='center' className={clsx(classes.flex, className)} onClick={onClick}>
			{icon}
			<Link className={classes.link} to='/'>
				{value}
			</Link>
		</Flex>
	);
};
