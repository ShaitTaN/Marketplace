import {Flex, Input as InputAntd, InputProps} from 'antd';
import {TextAreaProps} from 'antd/es/input';
import clsx from 'clsx';
import EyeOff from '../../assets/icons/eyeOff.svg';
import EyeOn from '../../assets/icons/eyeOn.svg';
import {ButtonBase} from '../Button/ButtonBase';
import classes from './styles.module.scss';

interface Props extends InputProps {
	inputSize?: 'normal' | 'large';
}

export const Input = ({className, inputSize = 'large', ...props}: Props) => {
	return (
		<InputAntd
			className={clsx(
				{
					[classes.input]: true,
					[classes.withPrefix]: props.prefix,
					[classes[inputSize]]: true,
				},
				className && className,
			)}
			classNames={{prefix: classes.prefix}}
			{...props}
		/>
	);
};

Input.Password = (props: InputProps) => {
	return (
		<InputAntd.Password
			className={clsx(classes.input, classes.password)}
			iconRender={(visible) => (visible ? <EyeOn /> : <EyeOff />)}
			{...props}
		/>
	);
};

interface TextAreaInputProps extends TextAreaProps {
	withButtons?: boolean;
	onClickCancel?: () => void;
	onClickSubmit?: () => void;
}

Input.TextArea = ({withButtons, onClickCancel, onClickSubmit, ...props}: TextAreaInputProps) => {
	return (
		<Flex gap={12} vertical style={{width: '100%'}} align='flex-end'>
			<InputAntd.TextArea className={clsx(classes.input, classes.textarea)} {...props} />
			{withButtons && (
				<Flex gap={8}>
					<ButtonBase buttonSize='small' buttonType='secondary' width={'96px '} onClick={onClickCancel}>
						Отменить
					</ButtonBase>
					<ButtonBase buttonSize='small' width={'102px'} onClick={onClickSubmit} disabled={!props.value}>
						Отправить
					</ButtonBase>
				</Flex>
			)}
		</Flex>
	);
};
