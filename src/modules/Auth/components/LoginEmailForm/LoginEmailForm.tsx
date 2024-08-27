import {Flex} from 'antd';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';
import {Form} from '../../../../ui/Form/Form';
import {Input} from '../../../../ui/Input/Input';

interface Props {
	onClickNext(): void;
	onClickBack(): void;
}

export const LoginEmailForm = ({onClickBack, onClickNext}: Props) => {
	return (
		<Form>
			<Flex vertical gap={24} style={{width: '300px'}}>
				<Form.BackButton onClick={onClickBack} />
				<Form.Title>Войти по почте</Form.Title>
				<Input placeholder='E-mail' />
				<ButtonBase width={'100%'} buttonSize='large' onClick={onClickNext}>
					Далее
				</ButtonBase>
			</Flex>
		</Form>
	);
};
