import {Pagination as AntPagination} from 'antd';
import classes from './styles.module.scss';
import ArrowIcon from '../../assets/icons/arrowSmall.svg';

export const Pagination = () => {
	const customisedItemRender = (_: number, type: string, originalElement: React.ReactNode) => {
		if (type === 'prev') {
			return <ArrowIcon style={{transform: 'rotate(90deg)'}} />;
		}
		if (type === 'next') {
			return <ArrowIcon style={{transform: 'rotate(-90deg)'}} />;
		}
		return originalElement;
	};

	return (
		<div className={classes.pagination}>
			<AntPagination defaultPageSize={12} defaultCurrent={1} total={50} itemRender={customisedItemRender} />
		</div>
	);
};
