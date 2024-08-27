import classes from './styles.module.scss';
import {Flex, Typography} from 'antd';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';
import {Form} from '../../../../ui/Form/Form';
import {useFormik} from 'formik';
import {Dispatch, SetStateAction} from 'react';
import * as Yup from 'yup';
import {BasicRadio} from '../../../../ui/BasicRadio/BasicRadio';
import {BasicRadioGroup} from '../../../../ui/BasicRadioGroup/BasicRadioGroup';
import {Input} from '../../../../ui/Input/Input';

interface Props {
	title: string;
	subtitle: string;
	radioButtons: RadioButtons[];
	setStep: Dispatch<SetStateAction<number>>;
}

interface RadioButtons {
	value: string;
	label: string;
}

const ComplaintValidationSchema = Yup.object().shape({
	reason: Yup.string().required('Error'),
	descpirtion: Yup.string().when('reason', {
		is: (reasonValue: string) => reasonValue === 'Другое',
		then: (schema) => schema.required('Error'),
		otherwise: (schema) => schema.optional(),
	}),
});

export const ComplaintForm = ({title, subtitle, radioButtons, setStep}: Props) => {
	const formik = useFormik({
		initialValues: {
			reason: '',
			descpirtion: '',
		},
		onSubmit: (values) => {
			const data = {
				reason: values.reason,
				descpirtion: values.descpirtion,
			};
			console.log(data);
		},
		validationSchema: ComplaintValidationSchema,
		validateOnMount: true,
	});

	const onNext = () => {
		formik.handleSubmit();
		setStep(1);
		formik.resetForm();
	};

	return (
		<Form className={classes.form}>
			<Flex vertical gap={24} style={{marginBottom: '24px'}}>
				<Form.Title>{`Пожаловаться на ${title}`}</Form.Title>
				<Form.Subtitle className={classes.subtitle}>{`Что именно не так с этим ${subtitle}?`}</Form.Subtitle>
			</Flex>

			<BasicRadioGroup name='reason' value={formik.values.reason} onChange={formik.handleChange}>
				{radioButtons.map((item, index) => (
					<BasicRadio key={index} value={item.value}>
						{item.value}
					</BasicRadio>
				))}
			</BasicRadioGroup>

			{formik.values.reason === 'Другое' && (
				<Flex vertical gap={8} style={{marginBottom: '24px'}}>
					<Typography.Text className={classes.text}>
						<span>*</span> Опишите причину жалобы
					</Typography.Text>
					<Input.TextArea
						style={{height: '98px'}}
						name='descpirtion'
						value={formik.values.descpirtion}
						onChange={formik.handleChange}
					/>
				</Flex>
			)}

			<ButtonBase
				buttonSize='normal'
				htmlType='submit'
				onClick={onNext}
				disabled={!formik.isValid || formik.isSubmitting}
			>
				Отправить жалобу
			</ButtonBase>
		</Form>
	);
};
