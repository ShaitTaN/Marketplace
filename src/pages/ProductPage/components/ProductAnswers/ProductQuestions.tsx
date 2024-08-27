import classes from './styles.module.scss';
import {Flex, Typography} from 'antd';
import {Questions} from '../../../../modules/ProductQuestions';
import {QuestionInput} from '../../../../modules/ProductQuestions/components/QuestionInput/QuestionInput';

interface Props {
	amountQuestion: number;
}

export const ProductQuestions = ({amountQuestion}: Props) => {
	return (
		<Flex vertical gap={16} className={classes.questions}>
			<h3>
				Вопросы об изделии<sup>{amountQuestion ? amountQuestion : 0}</sup>
			</h3>
			{amountQuestion ? (
				<Questions />
			) : (
				<Flex vertical gap={16}>
					<Typography className={classes.noQuestions}>
						Пока никто не задавал вопросов — станьте первым :) Задайте вопрос, чтобы уточнить какую-либо информацию об
						изделии.
					</Typography>
					<QuestionInput />
				</Flex>
			)}
		</Flex>
	);
};
