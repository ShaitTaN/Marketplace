import {useState} from 'react';
import {Form} from '../../../../ui/Form/Form';
import {LoginEmailForm} from '../LoginEmailForm/LoginEmailForm';
import {EmailOtpForm} from '../EmailOtpForm/EmailOtpForm';
import {PhoneRegisterForm} from '../PhoneRegisterForm/PhoneRegisterForm';
import {PhoneOtpForm} from '../PhoneOtpForm/PhoneOtpForm';

interface Props {
	onCLickAlternate: () => void;
}

export const EmailAuth = ({onCLickAlternate}: Props) => {
	const [step, setStep] = useState(0);

	return (
		<Form.Card>
			{step === 0 && <LoginEmailForm onClickBack={onCLickAlternate} onClickNext={() => setStep(1)} />}
			{step === 1 && <EmailOtpForm onClickNext={() => setStep(2)} onClickBack={() => setStep(0)} type='login' />}
			{step === 2 && <PhoneRegisterForm onClickNext={() => setStep(3)} onClickBack={() => setStep(2)} />}
			{step === 3 && <PhoneOtpForm onClickNext={() => setStep(0)} onClickBack={() => setStep(2)} type='register' />}
		</Form.Card>
	);
};
