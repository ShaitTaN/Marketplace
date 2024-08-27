import {Flex} from 'antd';
import {useState} from 'react';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';
import {Form} from '../../../../ui/Form/Form';
import {Input} from '../../../../ui/Input/Input';

interface Props {
	setStep(step: number): void;
}

export const PasswordResetFrom = ({setStep}: Props) => {
	const [resetStep, setResetStep] = useState(0);

	const onClickNext = () => {
		setResetStep(1);
	};

	const onClickBack = () => {
		setStep(2);
	};

	const onClickBackReset = () => {
		setResetStep(0);
	};

	return (
		<Form>
			<Flex vertical gap={24} style={{width: '300px'}}>
				{resetStep === 0 && (
					<>
						<Form.BackButton onClick={onClickBack} />
						<Flex vertical gap={8}>
							<Form.Title style={{fontSize: '24px'}}>Восстановление пароля</Form.Title>
							<Form.Subtitle>
								Введите адрес электронной почты, на которыйвы регистрировались. Вам будет отправлено письмо со ссылкой
								на создание нового пароля.
							</Form.Subtitle>
						</Flex>
						<Input placeholder='Введите свой e-mail' />
						<ButtonBase width={'100%'} buttonSize='large' onClick={onClickNext}>
							Восстановить
						</ButtonBase>
					</>
				)}
				{resetStep === 1 && (
					<>
						<Flex vertical gap={8}>
							<Form.Title style={{fontSize: '24px'}}>Восстановление пароля</Form.Title>
							<Form.Subtitle>
								Ссылка для восстановления пароля отправлена на ваш e-mail. Проверьте почту :)
							</Form.Subtitle>
						</Flex>
						<ButtonBase width={'100%'} buttonSize='large' onClick={onClickBackReset}>
							Хорошо
						</ButtonBase>
					</>
				)}
			</Flex>
		</Form>
	);
};
