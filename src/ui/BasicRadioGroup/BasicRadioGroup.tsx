import {Radio as RadioAntd, RadioProps} from 'antd';
import classes from './styles.module.scss';

export const BasicRadioGroup = ({children, name, value, onChange, ...props}: RadioProps) => {
	return (
		<RadioAntd.Group className={classes.basicRadioGroup} name={name} value={value} onChange={onChange} {...props}>
			{children}
		</RadioAntd.Group>
	);
};
