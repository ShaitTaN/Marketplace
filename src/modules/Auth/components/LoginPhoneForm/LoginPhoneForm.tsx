import {Flex} from 'antd';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';
import {Form} from '../../../../ui/Form/Form';
import {Input} from '../../../../ui/Input/Input';

interface Props {
	onClickNext(): void;
	onClickEmail(): void;
}

export const LoginPhoneForm = ({onClickNext, onClickEmail}: Props) => {
	return (
		<Form>
			<Flex vertical gap={24} style={{width: '300px'}}>
				<Flex vertical gap={8}>
					<Form.Title>Введите номер телефона</Form.Title>
					<Form.Subtitle>Мы совершим звонок-сброс на ваш номер</Form.Subtitle>
				</Flex>
				<Input
					placeholder='(999) 999 99 99 '
					prefix='+7'
					name='phone'
					type='tel'
					pattern='(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?'
				/>
				<Flex vertical gap={12}>
					<ButtonBase width={'100%'} buttonSize='large' onClick={onClickNext}>
						Далее
					</ButtonBase>
					<ButtonBase width={'100%'} buttonSize='large' buttonType='secondary' onClick={onClickEmail}>
						Войти по почте
					</ButtonBase>
				</Flex>
			</Flex>
		</Form>
	);
};
