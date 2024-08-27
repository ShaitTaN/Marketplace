import {Radio as RadioAntd, RadioProps} from 'antd';
import classes from './style.module.scss';

export const BasicRadio = ({value, ...props}: RadioProps) => {
	return (
		<RadioAntd className={classes.basicRadio} value={value} {...props}>
			{value}
		</RadioAntd>
	);
};
