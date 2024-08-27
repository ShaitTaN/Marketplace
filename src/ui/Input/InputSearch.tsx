import {Input, InputProps} from 'antd';
import clsx from 'clsx';
import {useEffect, useRef, useState} from 'react';
import classes from './styles.module.scss';

interface PropsSearch extends InputProps {
	value: string;
	data: {label: string}[];
	setValue: (value: string) => void;
	inputSize?: 'normal' | 'large';
	setIsSelectedPoint?: (value: boolean) => void;
}

export const InputSearch = ({
	inputSize = 'large',
	value,
	data,
	setValue,
	setIsSelectedPoint,
	...props
}: PropsSearch) => {
	const [isOpen, setIsOpen] = useState(false);
	const inputRef = useRef<null | HTMLDivElement>(null);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.value === '') {
			setValue(event.target.value);
			setIsOpen(false);
			setIsSelectedPoint && setIsSelectedPoint(false);
			return;
		}
		setValue(event.target.value);
		setIsOpen(true);
	};

	const handleSelectChange = (selectedOption: {label: string} | null) => {
		setValue(selectedOption ? selectedOption.label : '');
		setIsSelectedPoint && setIsSelectedPoint(selectedOption ? true : false);
		setIsOpen(false);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div ref={inputRef} className={classes.wrapperInputAndSelect}>
			<Input
				className={clsx({
					[classes.input]: true,
					[classes[inputSize]]: true,
				})}
				value={value}
				onChange={handleInputChange}
				onClick={() => setIsOpen(true)}
				{...props}
			/>
			{isOpen && (
				<div className={classes.selectWrapper}>
					{data
						.filter((item) => item.label.toLowerCase().includes(value.toLowerCase()))
						.map((option) => (
							<div key={option.label} onClick={() => handleSelectChange(option)} className={classes.option}>
								{option.label}
							</div>
						))}
				</div>
			)}
		</div>
	);
};
