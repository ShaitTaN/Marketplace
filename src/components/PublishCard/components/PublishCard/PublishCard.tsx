import {Card as CardAntd, Flex} from 'antd';
import {Comment as IComment} from '../../../../app/models/Types';
import {Comment} from '../../../Comment/Comment';
import {CardCommentInput} from '../CardCommentInput/CardCommentInput';
import {CardInfo} from '../CardInfo/CardInfo';
import {CardText} from '../CardText/CardText';
import {CardActionsProps, CardInfoProps, CardTextProps} from '../types/Types';
import classes from './styles.module.scss';

interface Props extends CardTextProps, CardInfoProps, CardActionsProps {
	comments?: IComment[];
	hasCommentInput?: boolean;
	hasSubscribe?: boolean;
	styles?: React.CSSProperties;
	onOpenPublication?: () => void;
	valueComment?: string;
	setValueComment?: (value: string) => void;
	onEnterImage?: boolean;
}

export const PublishCard = ({
	cardText,
	title,
	description,
	avaSrc,
	imgSrc,
	imgSrcArray,
	likesCount,
	commentsCount,
	btnRedirectToProduct,
	shortened = false,
	width = 352,
	imgHeight = 312,
	rows = 3,
	styles = {},
	comments = [],
	hasCommentInput = false,
	hasSubscribe = false,
	hasAddToArchive = false,
	onOpenPublication,
	valueComment,
	setValueComment,
}: Props) => {
	return (
		<CardAntd
			id={shortened ? classes.cardShortened : classes.card}
			style={{width: width, ...styles}}
			onClick={onOpenPublication}
		>
			<Flex vertical gap={24}>
				<Flex vertical gap={8}>
					<CardInfo
						title={title}
						description={description}
						avaSrc={avaSrc}
						imgSrc={imgSrc}
						imgSrcArray={imgSrcArray}
						likesCount={likesCount}
						commentsCount={commentsCount}
						btnRedirectToProduct={btnRedirectToProduct}
						shortened={shortened}
						imgHeight={imgHeight}
						hasSubscribe={hasSubscribe}
						hasAddToArchive={hasAddToArchive}
					/>
					<CardText rows={rows} cardText={cardText} shortened={shortened} />
				</Flex>
				{comments.map((comment, i) => (
					<Comment comment={comment} key={i} hasReplyButton />
				))}
				{hasCommentInput && <CardCommentInput value={valueComment!} setValue={setValueComment!} />}
			</Flex>
		</CardAntd>
	);
};
