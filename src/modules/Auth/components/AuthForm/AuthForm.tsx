import {useState} from 'react';
import {EmailAuth} from '../EmailAuth/EmailAuth';
import {PhoneAuth} from '../PhoneAuth/PhoneAuth';

export const AuthForm = () => {
	const [authVariant, setAuthVariant] = useState<'phone' | 'email'>('phone');

	const onCLickPhoneAuth = () => {
		setAuthVariant('phone');
	};

	const onCLickEmailAuth = () => {
		setAuthVariant('email');
	};

	return (
		<>
			{authVariant === 'phone' && <PhoneAuth onCLickAlternate={onCLickEmailAuth} />}
			{authVariant === 'email' && <EmailAuth onCLickAlternate={onCLickPhoneAuth} />}
		</>
	);
};
