import {useState} from 'react';
import {Form} from '../../../../ui/Form/Form';
import {LoginPhoneForm} from '../LoginPhoneForm/LoginPhoneForm';
import {PhoneOtpForm} from '../PhoneOtpForm/PhoneOtpForm';
import {EmailRegisterForm} from '../EmailRegisterForm/EmailRegisterForm';
import {EmailOtpForm} from '../EmailOtpForm/EmailOtpForm';

interface Props {
	onCLickAlternate: () => void;
}

export const PhoneAuth = ({onCLickAlternate}: Props) => {
	const [step, setStep] = useState(0);

	return (
		<Form.Card>
			{step === 0 && <LoginPhoneForm onClickEmail={onCLickAlternate} onClickNext={() => setStep(1)} />}
			{step === 1 && <PhoneOtpForm onClickNext={() => setStep(2)} onClickBack={() => setStep(0)} type='login' />}
			{step === 2 && <EmailRegisterForm onClickNext={() => setStep(3)} onClickBack={() => setStep(1)} />}
			{step === 3 && <EmailOtpForm onClickNext={() => setStep(0)} onClickBack={() => setStep(2)} type='register' />}
		</Form.Card>
	);
};
