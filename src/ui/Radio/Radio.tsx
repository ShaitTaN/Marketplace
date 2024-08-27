import {Radio as RadioAntd, RadioProps} from 'antd';
import classes from './styles.module.scss';
export const Radio = ({children, ...props}: RadioProps) => {
	return (
		<div className={classes.radio}>
			<RadioAntd {...props}>
				{children}
			</RadioAntd>
		</div>
	);
};
