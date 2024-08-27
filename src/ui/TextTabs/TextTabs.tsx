import {Flex} from 'antd';
import React from 'react';
import classes from './styles.module.scss';
import clsx from 'clsx';

interface Props {
	tabs: string[];
	padding?: string;
}

export const TextTabs = ({tabs, padding}: Props) => {
	const [active, setActive] = React.useState(0);

	const onClick = (index: number) => {
		setActive(index);
	};

	return (
		<Flex justify='space-between' align='center' className={classes.tabs} role='tablist' gap={44}>
			{tabs.map((tab, index) => (
				<div
					role='tab'
					key={index}
					style={{padding: padding}}
					className={clsx({[classes.item]: true, [classes.active]: active === index})}
					onClick={() => onClick(index)}
				>
					{tab}
				</div>
			))}
		</Flex>
	);
};
