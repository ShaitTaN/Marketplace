import {useState} from 'react';
import {ReplyModal} from '../../../../components/ReplyModal/ReplyModal';
import {AwaitingReviewCard} from './AwaitingReviewCard/AwaitingReviewCard';
import classes from './styles.module.scss';

interface Props {
	cardsData: {
		title: string;
		img: string;
	}[];
}

export const LayoutWithContent = ({cardsData}: Props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentCardData, setCurrentCardData] = useState({
		title: '',
		img: '',
		index: 0,
	});
	const handleClosaeModal = () => {
		setIsModalOpen(false);
	};
	const handleOpenModal = (index: number) => {
		setCurrentCardData({...cardsData[index], index});
		setIsModalOpen(true);
	};
	return (
		<div className={classes.layoutWithContent}>
			{cardsData.map((card, index) => (
				<AwaitingReviewCard
					key={index}
					img={card.img}
					title={card.title}
					index={index}
					handleOpenModal={handleOpenModal}
				/>
			))}
			<ReplyModal
				open={isModalOpen}
				onCancel={handleClosaeModal}
				awaitingProducts={cardsData.length}
				imgsArr={cardsData.map((card) => card.img)}
				title={currentCardData.title}
				cardIndex={currentCardData.index}
			/>
		</div>
	);
};
