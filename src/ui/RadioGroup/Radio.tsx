import {Radio as RadioAntd, RadioProps} from 'antd';
import classes from './styles.module.scss';

interface RadioButton {
	value: string;
	disabled?: boolean;
}

interface Props extends RadioProps {
	radioButtons: RadioButton[];
	gap?: number;
}

export const RadioGroup = ({radioButtons, gap, ...props}: Props) => {
	return (
		<div className={classes.wrapper}>
			<RadioAntd.Group style={{gap: gap}} className={classes.radioGroup} {...props}>
				{radioButtons.map((elem) => (
					<RadioAntd.Button key={elem.value} disabled={elem.disabled} value={elem.value}>
						{elem.value}
					</RadioAntd.Button>
				))}
			</RadioAntd.Group>
		</div>
	);
};
