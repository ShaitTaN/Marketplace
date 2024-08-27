import {Flex, Typography} from 'antd';
import classes from './styles.module.scss';
import {ImageDisplay} from '../../../../../components/ImageDisplay/ImageDisplay';
import {Rate} from '../../../../../ui/Rate/Rate';

interface Props {
	img: string;
	title: string;
	handleOpenModal: (index: number) => void;
	index: number;
}

export const AwaitingReviewCard = ({img, title, handleOpenModal, index}: Props) => {
	return (
		<Flex gap={16} align='center' vertical className={classes.cardWrapper} onClick={() => handleOpenModal(index)}>
			<div className={classes.imageWrapper}>
				<ImageDisplay url={img} />
			</div>
			<div style={{textAlign: 'center'}}>
				<Typography.Paragraph ellipsis={{rows: 2}} className={classes.title}>
					{title}
				</Typography.Paragraph>
			</div>
			<Rate sizeStars='large' />
		</Flex>
	);
};
