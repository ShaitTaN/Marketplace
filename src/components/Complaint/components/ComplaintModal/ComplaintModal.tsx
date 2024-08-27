import {useState} from 'react';
import {ComplaintForm} from '../ComplaintForm/ComplaintForm';
import {Modal} from '../../../../ui/Modal/Modal';
import {ComplaintSuccess} from '../ComplaintSuccess/ComplaintSuccess';

interface Props {
	open: boolean;
	onClose: () => void;
	title: string;
	subtitle: string;
	radioButtons: RadioButtons[];
}

interface RadioButtons {
	value: string;
	label: string;
}

export const ComplaintModal = ({open, onClose, title, subtitle, radioButtons}: Props) => {
	const [step, setStep] = useState(0);

	return (
		<Modal open={open} onCancel={onClose} footer={null} centered destroyOnClose={true} afterClose={() => setStep(0)}>
			{step === 0 && <ComplaintForm title={title} subtitle={subtitle} radioButtons={radioButtons} setStep={setStep} />}
			{step === 1 && <ComplaintSuccess onClose={onClose} setStep={setStep} />}
		</Modal>
	);
};
