import classes from './styles.module.scss';
import {Breadcrumb as BreadcrumbAntd, BreadcrumbProps} from 'antd';
import ArrowHead from '../../assets/icons/arrowHead.svg';

export const Breadcrumb = (props: BreadcrumbProps) => {
	return <BreadcrumbAntd separator={<ArrowHead />} className={classes.breadcrumb} {...props} />;
};
