import {Flex} from 'antd';
import classes from './styles.module.scss';
import {MyReviewBlock} from './MyReviewBlock';
import {Comment} from '../../../../app/models/Types';

interface Props {
	myReviewBlockData: {
		title: string;
		rate: number;
		date: string;
		description: string;
		imgs: string[];
		productImg: string;
		replies?: Comment[];
	}[];
}

export const LayoutWithContent = ({myReviewBlockData}: Props) => {
	return (
		<Flex vertical gap={15} className={classes.layoutWithContent}>
			{myReviewBlockData.map((block, index) => (
				<MyReviewBlock key={index} {...block} />
			))}
		</Flex>
	);
};
