import React from 'react';
import classes from '../styles.module.scss';
import {Flex, Typography} from 'antd';

interface Props {
	title: string;
	items: React.ReactNode[];
}

export const ActionsBlock = ({title, items}: Props) => {
	return (
		<Flex vertical gap={16} className={classes.actionsWrapper}>
			<Typography.Text className={classes.title}>{title}</Typography.Text>
			<Flex vertical gap={12}>
				{items.map((item, index) => (
					<Typography.Text key={index} className={classes.link}>
						{item}
					</Typography.Text>
				))}
			</Flex>
		</Flex>
	);
};
