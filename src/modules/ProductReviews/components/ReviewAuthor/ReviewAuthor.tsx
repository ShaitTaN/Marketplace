import {Flex} from 'antd';
import {Avatar} from '../../../../ui/Avatar/Avatar';
import {Rate} from '../../../../ui/Rate/Rate';
import ExclamationCircle from '../../../../assets/icons/exclamationCircle.svg';
import classes from './styles.module.scss';
import {Popover} from '../../../../ui/Popover/Popover';
import {ComplaintModal} from '../../../../components/Complaint/components/ComplaintModal/ComplaintModal';
import {useState} from 'react';

interface Props {
	name: string;
	date: string;
	rate?: number;
	avaSrc?: string;
	isBrandProfile?: boolean;
}

const reviewComplaint = [
	{label: 'Незенцурная лексика', value: 'Незенцурная лексика'},
	{label: 'Заказной отзыв', value: 'Заказной отзыв'},
	{label: 'Спам', value: 'Спам'},
	{label: 'Некорректное фото', value: 'Некорректное фото'},
	{label: 'Отзыв не об изделии', value: 'Отзыв не об изделии'},
	{label: 'Другое', value: 'Другое'},
];

export const ReviewAuthor = ({name, date, rate, avaSrc, isBrandProfile}: Props) => {
	const [isComplaintModalOpen, setIsComplaintModalOpen] = useState(false);

	const onOpenComplaintModal = () => {
		setIsComplaintModalOpen(true);
	};

	return (
		<Flex align='center' gap={12} className={classes.reviewAuthor}>
			<Avatar avatarType='not-bordered' avatarSize='small' src={avaSrc} />
			<Flex align='center'>
				<div className={classes.info}>
					<div className={classes.name}>{name}</div>
					<div className={classes.date}>{date}</div>
				</div>
				{!isBrandProfile && <Rate disabled value={rate} />}
			</Flex>
			<Popover
				withoutBorder
				overlayClassName={classes.helpPopover}
				className={classes.wrapperPopover}
				placement='bottomRight'
				content={<span>Пожаловаться на отзыв</span>}
				trigger={['hover', 'click']}
			>
				<ExclamationCircle className={classes.exclamation} onClick={onOpenComplaintModal} />
			</Popover>
			<ComplaintModal
				title='отзыв'
				subtitle='отзывом'
				open={isComplaintModalOpen}
				onClose={() => setIsComplaintModalOpen(false)}
				radioButtons={reviewComplaint}
			/>
		</Flex>
	);
};
