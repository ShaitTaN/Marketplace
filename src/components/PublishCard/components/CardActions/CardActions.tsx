import {Flex, Typography} from 'antd';
import classes from './styles.module.scss';
import CommentsIcon from '../../../../assets/icons/comments.svg';
import {CardActionsProps} from '../types/Types';
import {SharePopover} from '../../../../ui/SharePopover/SharePopover';
import ShareIcon from '../../../../assets/icons/shareDefault.svg';
import React, {useState} from 'react';
import AddToArchiveIcon from '../../../../assets/icons/addToArchive.svg';
import AddToArchiveActiveIcon from '../../../../assets/icons/addToArchiveActive.svg';
import {Popover} from '../../../../ui/Popover/Popover';
import {Like} from '../../../../ui/Like/Like';

export const CardActions = ({likesCount, commentsCount, btnRedirectToProduct, hasAddToArchive}: CardActionsProps) => {
	const [isLiked, setIsLiked] = useState(false);
	const [isAddedToArchive, setIsAddedToArchive] = useState(false);

	const onAddToArchive = (e: React.MouseEvent) => {
		e.stopPropagation();
		setIsAddedToArchive(!isAddedToArchive);
	};

	return (
		<Flex className={classes.cardActions} gap={12}>
			<Flex gap={5} className={classes.action} align='center' justify='center'>
				<Like handleClick={setIsLiked} isLikedProps={isLiked} />
				<Typography.Text>{likesCount}</Typography.Text>
			</Flex>
			<Flex gap={5} className={classes.action} align='center' justify='center'>
				<CommentsIcon width={24} height={24} />
				<Typography.Text>{commentsCount}</Typography.Text>
			</Flex>
			<Flex className={classes.action} align='center' justify='center' onClick={(e) => e.stopPropagation()}>
				<SharePopover>
					<ShareIcon />
				</SharePopover>
			</Flex>
			<div style={{marginLeft: 'auto'}}>
				<Flex gap={4} align='center'>
					{hasAddToArchive && (
						<>
							{isAddedToArchive ? (
								<div style={{width: '24px', height: '24px'}}>
									<Popover
										placement='top'
										withoutBorder
										content={
											<p
												style={{
													margin: 0,
													fontSize: 12,
													fontStyle: 'normal',
													fontWeight: 400,
													lineHeight: '120%',
													color: '#080C28',
												}}
											>
												Добавлено в «Сохранённые публикации»
											</p>
										}
										trigger={'hover'}
									>
										<AddToArchiveActiveIcon style={{cursor: 'pointer'}} onClick={onAddToArchive} />
									</Popover>
								</div>
							) : (
								<AddToArchiveIcon style={{cursor: 'pointer'}} onClick={onAddToArchive} />
							)}
						</>
					)}
					{btnRedirectToProduct}
				</Flex>
			</div>
		</Flex>
	);
};
