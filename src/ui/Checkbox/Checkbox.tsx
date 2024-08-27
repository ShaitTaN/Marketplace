import clsx from 'clsx';
import CheckboxIcon from '../../assets/icons/checkbox.svg';
import classes from './styles.module.scss';

interface Props {
	checked?: boolean;
	size?: 'small' | 'normal';
	onChange?: () => void;
}

export const Checkbox = ({checked, size = 'normal', onChange}: Props) => {
	return (
		<label className={clsx({[classes.checkbox]: true, [classes.checked]: checked, [classes[size]]: true})}>
			<input type='checkbox' checked={checked} onChange={onChange} />
			{checked && <CheckboxIcon />}
		</label>
	);
};
