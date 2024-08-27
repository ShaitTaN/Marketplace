import {Input} from '../../../../ui/Input/Input';
import classes from './styles.module.scss';
import {Flex} from 'antd';

export const QuestionInput = () => {
	return (
		<Flex className={classes.questionInput} vertical gap={8}>
			{/* <Input placeholder='Напишите свой вопрос' className={classes.input} /> */}
			<Input className={classes.input} placeholder='Задайте ваш вопрос...' />
			<div className={classes.description}>Вам ответит представитель бренда или пользователь, купивший это изделие</div>
		</Flex>
	);
};
