import {Flex} from 'antd';
import clsx from 'clsx';
import ArrowHead from '../../../../assets/icons/arrowHead.svg';
import classes from './styles.module.scss';

interface Props {
	title: string;
	icon?: JSX.Element;
	active?: boolean;
	hasChildren?: boolean;
}

export const CatalogMenuItem = ({title, icon, active, hasChildren}: Props) => {

	return (
		<Flex
			align='center'
			justify='space-between'
			className={clsx({[classes.container]: true, [classes.active]: active})}
		>
			<Flex align='center' gap={'12px'}>
				{icon && (
					<Flex className={classes.icon} align='center' justify='center'>
						{icon}
					</Flex>
				)}
				<div className={classes.title}>{title}</div>
			</Flex>
			{hasChildren && <ArrowHead className={classes.arrow} />}
		</Flex>
	);
};
