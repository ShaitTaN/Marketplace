import clsx from 'clsx';
import {Publication} from '../../../../app/models/Publication';
import ArrowHeadBigIcon from '../../../../assets/icons/arrowHeadBig.svg';
import {PublishCard} from '../../../../components/PublishCard/components/PublishCard/PublishCard';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';
import {Modal} from '../../../../ui/Modal/Modal';
import classes from './styles.module.scss';
import {useState, useEffect} from 'react';

interface Props {
	item: Publication;
	open: boolean;
	onCancel: () => void;
	onClickNext: () => void;
	onClickPrev: () => void;
}

export const PublicationModal = ({item, open, onCancel, onClickNext, onClickPrev}: Props) => {
	const [valueComment, setValueComment] = useState('');

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'ArrowLeft') {
				combineClickOnNextOrPrev(onClickPrev);
			} else if (event.key === 'ArrowRight') {
				combineClickOnNextOrPrev(onClickNext);
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [onClickNext, onClickPrev]);

	const combineClickOnNextOrPrev = (func: () => void) => {
		func();
		setValueComment('');
	};

	return (
		<Modal open={open} onCancel={onCancel} centered wrapClassName={classes.modal} footer={null}>
			<div className={classes.container}>
				<button className={clsx(classes.btn, classes.btnLeft)} onClick={() => combineClickOnNextOrPrev(onClickPrev)}>
					<ArrowHeadBigIcon />
				</button>
				<PublishCard
					styles={{borderRadius: '16px', padding: '24px'}}
					title={item.authorName}
					description={item.date}
					avaSrc={item.avaSrc}
					imgSrc={item.imgSrc}
					imgSrcArray={item.imgSrcArray}
					cardText={item.text}
					likesCount={item.likesCount}
					commentsCount={item.commentsCount}
					rows={100}
					imgHeight={539}
					width={587}
					btnRedirectToProduct={
						<ButtonBase buttonType='secondary' buttonSize='normal'>
							К изделию
						</ButtonBase>
					}
					comments={[{authorName: 'Name', text: 'Очень красиво!', date: '8 дек в 12:32'}]}
					hasCommentInput
					hasSubscribe
					hasAddToArchive
					valueComment={valueComment}
					setValueComment={setValueComment}
				/>
				<button className={clsx(classes.btn, classes.btnRight)} onClick={() => combineClickOnNextOrPrev(onClickNext)}>
					<ArrowHeadBigIcon />
				</button>
			</div>
		</Modal>
	);
};
