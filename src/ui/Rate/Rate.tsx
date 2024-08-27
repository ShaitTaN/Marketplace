import {Rate as RateAnt, RateProps} from 'antd';
import classes from './styles.module.scss';
import clsx from 'clsx';

interface Props extends RateProps {
	sizeStars?: 'normal' | 'medium' | 'large';
}

export const Rate = ({sizeStars = 'normal', ...props}: Props) => {
	return <RateAnt className={clsx({[classes.rate]: true, [classes[sizeStars]]: true})} {...props} />;
};
