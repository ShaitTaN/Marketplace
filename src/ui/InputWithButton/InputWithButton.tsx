import Search, {SearchProps} from 'antd/es/input/Search';
import classes from './styles.module.scss';
import clsx from 'clsx';
import {useEffect, useRef, useState} from 'react';
import {Input} from 'antd';

interface Props extends SearchProps {
	typeInpWithBtn?: 'search';
	icon?: React.ReactNode;
	placeholder?: string;
	width?: number | string;
}

export const InputWithButton = ({typeInpWithBtn = 'search', icon, placeholder, width}: Props) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isActive, setIsActive] = useState<boolean>(false);

	const handleClick = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setIsActive(false);
		} else {
			setIsActive(true);
		}
	};

	const renderInput = () => {
		if (typeInpWithBtn === 'search') {
			return (
				<Search
					style={{width: width}}
					className={clsx({
						[classes.writeCommentInput]: true,
						[classes[typeInpWithBtn]]: true,
						[classes.inputActive]: isActive,
					})}
					placeholder={placeholder}
					enterButton={icon}
				/>
			);
		}
		if (typeInpWithBtn === 'message') {
			return (
				<div
					className={clsx({
						[classes.writeCommentInput]: true,
						[classes[typeInpWithBtn]]: true,
						[classes.inputActive]: isActive,
					})}
					ref={ref}
				>
					<Input.TextArea autoSize className={classes.textArea} placeholder={placeholder} />
					<button className={classes.sendButton}>{icon}</button>
				</div>
			);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, []);

	return <>{renderInput()}</>;
};
