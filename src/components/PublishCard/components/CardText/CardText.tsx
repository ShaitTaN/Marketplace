import {Typography} from 'antd';
import {useState} from 'react';
import classes from './styles.module.scss';
import clsx from 'clsx';
import {CardTextProps} from '../types/Types';

export const CardText = ({cardText, rows}: CardTextProps) => {
	const [isEllipsis, setIsEllipsis] = useState(false);
	return (
		<div className={classes.cardText}>
			<Typography.Paragraph
				style={{marginBottom: 0}}
				ellipsis={{
					rows: rows,
					expandable: true,
					onEllipsis: (ellipsis) => setIsEllipsis(ellipsis),
					symbol: ' Читать пост',
				}}
				className={clsx({
					[classes.description]: true,
					[classes.ellipsis]: isEllipsis,
				})}
			>
				{cardText}
			</Typography.Paragraph>
		</div>
	);
};
