import {Flex} from 'antd';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';
import {Form} from '../../../../ui/Form/Form';
import {Input} from '../../../../ui/Input/Input';
import {Checkbox} from '../../../../ui/Checkbox/Checkbox';

interface Props {
	onClickNext(): void;
	onClickBack(): void;
	type: 'login' | 'register';
}

export const EmailOtpForm = ({onClickNext, onClickBack, type}: Props) => {
	return (
		<Form>
			<Flex vertical gap={24} style={{width: '300px'}}>
				<Form.BackButton onClick={onClickBack} />
				<Flex vertical gap={8}>
					<Form.Title>Введите код из сообщения</Form.Title>
					<Form.Subtitle>Вам пришёл код на почту user@mail.ru</Form.Subtitle>
				</Flex>
				<Flex vertical gap={8}>
					<Input placeholder='123456' />
					<Form.Subtitle>Запросить новый код можно через 00:57</Form.Subtitle>
				</Flex>
				{type === 'register' && (
					<Flex gap={8}>
						<Checkbox size='small' />
						<Form.Subtitle type='primary'>
							<span style={{color: '#D02438'}}>*</span> Вы принимаете <u>правила сайта</u> и даёте{' '}
							<u>согласие на обработку персональных данных</u>
						</Form.Subtitle>
					</Flex>
				)}
				<ButtonBase width={'100%'} buttonSize='large' onClick={onClickNext}>
					{type === 'login' ? 'Далее' : 'Зарегистрироваться'}
				</ButtonBase>
				<Form.Button>Не приходит код?</Form.Button>
			</Flex>
		</Form>
	);
};
