import {Flex} from 'antd';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';
import {Form} from '../../../../ui/Form/Form';
import {Input} from '../../../../ui/Input/Input';

interface Props {
	onClickNext(): void;
	onClickBack(): void;
}

export const EmailRegisterForm = ({onClickNext, onClickBack}: Props) => {
	return (
		<Form>
			<Flex vertical gap={24} style={{width: '300px'}}>
				<Form.BackButton onClick={onClickBack} />
				<Flex vertical gap={8}>
					<Form.Title>Завершите регистрацию</Form.Title>
					<Form.Subtitle>Мы отправим код на ваш e-mail</Form.Subtitle>
				</Flex>
				<Flex vertical gap={12}>
					<Input placeholder='Имя' />
					<Input placeholder='Фамилия' />
					<Input placeholder='E-mail' />
				</Flex>
				<ButtonBase width={'100%'} buttonSize='large' onClick={onClickNext}>
					Далее
				</ButtonBase>
			</Flex>
		</Form>
	);
};
