import classes from './styles.module.scss';

interface Props {
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	title: string | React.ReactNode;
	disabled?: boolean;
	accept?: string;
}

export const Upload = ({onChange, title, disabled, accept}: Props) => {
	return (
		<label className={classes.upload}>
			{title}
			<input disabled={disabled} type='file' onChange={onChange} accept={accept} />
		</label>
	);
};
