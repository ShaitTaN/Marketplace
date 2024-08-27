import React from 'react';
import classes from './styles.module.scss';
import clsx from 'clsx';
import {ButtonProps} from './types';
import ArrowHeadSmall from '../../assets/icons/arrowHeadSmall.svg';
import ArrowLeft from '../../assets/icons/ArrowLeft.svg';
import {Flex} from 'antd';

export const Form = (props: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>) => {
	return <form {...props}>{props.children}</form>;
};

Form.Card = ({children}: {children: React.ReactNode}) => {
	return <Flex className={classes.card}>{children}</Flex>;
};

Form.Title = ({
	children,
	...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
	return (
		<h3 className={classes.title} {...props}>
			{children}
		</h3>
	);
};

interface SubtitleProps
	extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	type?: 'primary' | 'secondary';
}

Form.Subtitle = ({children, type = 'secondary', ...props}: SubtitleProps) => {
	return (
		<p className={clsx({[classes.subtitle]: true, [classes[type]]: true})} {...props}>
			{children}
		</p>
	);
};

Form.Button = ({children, buttonType = 'primary', onClick, ...props}: ButtonProps) => {
	const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		if (onClick) onClick(e);
	};

	return (
		<button onClick={onClickHandler} className={clsx({[classes.button]: true, [classes[buttonType]]: true})} {...props}>
			<div>{children}</div>
			<ArrowHeadSmall />
		</button>
	);
};

Form.BackButton = ({onClick, children, ...props}: ButtonProps) => {
	const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		if (onClick) onClick(e);
	};

	return (
		<button onClick={onClickHandler} className={clsx({[classes.button]: true, [classes.backButton]: true})} {...props}>
			<Flex align='center' gap={8}>
				<ArrowLeft width={24} height={24} />
				{children && <p className={classes.text}>{children}</p>}
			</Flex>
		</button>
	);
};
