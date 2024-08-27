import TextArea, {TextAreaProps} from 'antd/es/input/TextArea';
import classes from './styles.module.scss';

interface Props extends TextAreaProps {}

export const Textarea = ({...props}: Props) => {
	return <TextArea {...props} className={classes.textarea} />;
};
