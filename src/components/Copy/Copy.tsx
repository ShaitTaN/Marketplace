import {useState} from 'react';
import {Popover} from '../../ui/Popover/Popover';
import classes from './styles.module.scss';

interface Props {
	text: string;
}

export const Copy = ({text}: Props) => {
	const [open, setOpen] = useState(false);

	const onClick = () => {
		navigator.clipboard.writeText(text);
	};

	const onOpenChange = (newOpen: boolean) => {
		setOpen(newOpen);
	};

	const onMouseLeave = () => {
		setOpen(false);
	};

	return (
		<Popover content={'Скопировано'} trigger='click' withoutBorder open={open} onOpenChange={onOpenChange}>
			<button className={classes.button} onClick={onClick} onMouseLeave={onMouseLeave}>
				{text}
			</button>
		</Popover>
	);
};
