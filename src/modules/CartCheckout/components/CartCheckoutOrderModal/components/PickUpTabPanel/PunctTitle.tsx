import {Flex, Typography} from 'antd';
import {useState} from 'react';
import {Checkbox} from '../../../../../../ui/Checkbox/Checkbox';
import classes from './styles.module.scss';

interface Props {
	pointTitle: string;
	index: number;
}

export const PunctTitle = ({pointTitle, index}: Props) => {
	const [isChecked, setIsChecked] = useState(true);

	return (
		<Flex gap={8} key={index}>
			<Checkbox onChange={() => setIsChecked(!isChecked)} size='small' checked={isChecked} />
			<Typography.Text className={classes.text}>{pointTitle}</Typography.Text>
		</Flex>
	);
};
