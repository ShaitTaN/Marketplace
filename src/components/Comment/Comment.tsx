import classes from './styles.module.scss';
import {Flex, MenuProps} from 'antd';
import {Avatar} from '../../ui/Avatar/Avatar';
import clsx from 'clsx';
import {Comment as IComment} from '../../app/models/Types';
import {useState} from 'react';
import {ComplaintModal} from '../Complaint/components/ComplaintModal/ComplaintModal';
import {Dropdown} from '../../ui/Dropdown/Dropdown';
import MoreAnswers from '../../assets/icons/moreItemsPlus.svg';
import LessAnswers from '../../assets/icons/lessItemsMinus.svg';
import Pin from '../../assets/icons/pin.svg';
import {numberDeclination} from '../../utils/numberDeclination';
import {ReplyField} from './ReplyField';

interface Props {
	isReply?: boolean;
	isProductOwner?: boolean;
	hasReplyButton?: boolean;
	comment: IComment;
	onClickReply?: () => void;
	isPinned?: boolean;
}

const items: MenuProps['items'] = [
	{
		key: 'openModal',
		label: 'Пожаловаться',
	},
];

const questionAndAnswerComplaints = [
	{label: 'Вопрос или ответ не по теме изделия', value: 'Вопрос или ответ не по теме изделия'},
	{label: 'Нецензурная лексика', value: 'Нецензурная лексика'},
	{label: 'Спам', value: 'Спам'},
	{label: 'Другое', value: 'Другое'},
];

export const Comment = ({comment, isReply, hasReplyButton, isProductOwner, isPinned}: Props) => {
	const answersCount = ['ответ', 'ответа', 'ответов'];
	const [isComplaintModalOpen, setIsComplaintModalOpen] = useState(false);
	const [isAllAnswersVisible, setIsAllAnswersVisible] = useState(false);
	const [isReplyInputVisible, setIsReplyInputVisible] = useState(false);
	const [replyText, setReplyText] = useState('');

	const onClickReply = () => {
		setIsReplyInputVisible(true);
	};

	const onCloseReply = () => {
		setIsReplyInputVisible(false);
		setReplyText('');
	};

	const onClick: MenuProps['onClick'] = ({key}) => {
		if (key === 'openModal') {
			setIsComplaintModalOpen(true);
		}
	};

	const handleShowAllAnswers = () => {
		setIsAllAnswersVisible(!isAllAnswersVisible);
	};

	return (
		<Flex
			className={clsx({
				[classes.comment]: true,
				[classes.reply]: isReply,
				[classes.productOwner]: isProductOwner,
			})}
			vertical
			gap={12}
		>
			<Flex gap={16}>
				<Avatar avatarType='not-bordered' avatarSize='small' src={comment.avaSrc} />
				<div>
					<Flex gap={12} align={isProductOwner ? 'center' : 'end'}>
						<Flex gap={4} align='center'>
							<div
								className={clsx({
									[classes.name]: true,
									titleNotCopy: isProductOwner,
								})}
							>
								{comment.authorName}
							</div>
							{isPinned && <Pin />}
						</Flex>

						<div className={classes.date}>{comment.date}</div>
						{hasReplyButton && (
							<div className={classes.replyBtn} onClick={onClickReply}>
								Ответить
							</div>
						)}
						<Dropdown menu={{items, onClick}} trigger={['hover']} placement='bottomLeft'></Dropdown>
					</Flex>
					<div className={classes.text}>{comment.text}</div>
				</div>
			</Flex>
			{isReplyInputVisible && <ReplyField value={replyText} onChange={setReplyText} onClickCancel={onCloseReply} />}

			{comment.replies && comment.replies?.length > 0 && (
				<>
					{comment.replies.length > 1 && (
						<div onClick={handleShowAllAnswers} className={classes.moreAnswers}>
							{!isAllAnswersVisible ? (
								<>
									<MoreAnswers style={{cursor: 'pointer'}} />
									<p>
										Развернуть все{' '}
										{`(${comment.replies.length} ${numberDeclination(comment.replies.length, answersCount)})`}
									</p>
								</>
							) : (
								<>
									<LessAnswers style={{cursor: 'pointer'}} /> <p>Свернуть</p>
								</>
							)}
						</div>
					)}

					<Flex className={classes.replies} vertical gap={24}>
						{!isAllAnswersVisible ? (
							<Comment
								comment={comment.replies[0]}
								isReply={true}
								isProductOwner={comment.replies[0].authorName === 'Brand Name'}
								hasReplyButton
								isPinned={comment.replies[0].pinned === true}
							/>
						) : (
							comment.replies?.map((reply, i) => (
								<Comment
									key={i}
									comment={reply}
									isReply={true}
									isProductOwner={reply.authorName === 'Brand Name'}
									hasReplyButton
									isPinned={reply.pinned === true}
								/>
							))
						)}
					</Flex>
				</>
			)}
			<ComplaintModal
				open={isComplaintModalOpen}
				onClose={() => setIsComplaintModalOpen(false)}
				title='вопрос/ответ'
				subtitle='вопросом или ответом'
				radioButtons={questionAndAnswerComplaints}
			/>
		</Flex>
	);
};
