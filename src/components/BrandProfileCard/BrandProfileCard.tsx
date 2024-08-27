import {Flex, Typography} from 'antd';
import classes from './styles.module.scss';
import {Avatar} from '../../ui/Avatar/Avatar';
import LocationDescriptionIcon from '../../assets/icons/LocationDescription.svg';
import ArrowSmallIcon from '../../assets/icons/arrowSmall.svg';
import HeartNormalIcon from '../../assets/icons/heartNormal.svg';
import ExclamationIcon from '../../assets/icons/exclamationCircle.svg';
import ShareIcon from '../../assets/icons/share.svg';
import {toNumberFormat} from '../../utils/toNumberFormat';
import {BrandStats} from '../../pages/BrandProfilePage/components/BrandStats/BrandStats';
import {ButtonBase} from '../../ui/Button/ButtonBase';
import {SharePopover} from '../../ui/SharePopover/SharePopover';
import clsx from 'clsx';
import {Link} from '../../ui/Link/Link';

interface Props {
	title: string;
	locationDescription: string;
	description: string;
	shortened?: boolean;
	avatarSrc?: string;
	rate?: number;
	comments?: number;
	subscribers?: number;
	posts?: number;
	openModal?: () => void;
}

export const BrandProfileCard = ({
	avatarSrc,
	title,
	locationDescription,
	description,
	rate,
	comments,
	subscribers,
	posts,
	shortened = false,
	openModal,
}: Props) => {
	return (
		<div className={classes.brandProfileCard}>
			<Flex vertical gap={shortened ? 20 : 32} style={{width: shortened ? '100%' : '356px'}} className={classes.card}>
				<Flex vertical gap={shortened ? 12 : 24}>
					<Flex gap={shortened ? 12 : 16}>
						<Avatar avatarSize={shortened ? 'normal' : 'medium'} avatarType='not-bordered' src={avatarSrc} />
						<Flex vertical justify='center' gap={4}>
							<Typography style={{fontSize: shortened ? 14 : 18}} className={clsx(classes.title, 'titleNotCopy')}>
								<Link component='button' size='normal'>
									{title}
								</Link>
							</Typography>
							<Flex gap={shortened ? 4 : 8}>
								<LocationDescriptionIcon style={{width: 16, height: 16}} />
								<Typography style={{fontSize: shortened ? 12 : 14}} className={classes.locationDescription}>
									{locationDescription}
								</Typography>
							</Flex>
						</Flex>
					</Flex>
					{shortened ? (
						<Typography.Paragraph
							ellipsis={{
								rows: 4,
								expandable: false,
							}}
							className={clsx(classes.description, 'titleNotCopy')}
							style={{width: 277}}
						>
							{description}
						</Typography.Paragraph>
					) : (
						<Typography style={{width: 289}} className={clsx(classes.description, 'titleNotCopy')}>
							{description}
						</Typography>
					)}

					{!shortened && (
						<Flex gap={34}>
							<BrandStats count={rate ? toNumberFormat(rate) : '-'} title='Рейтинг' />
							<BrandStats count={comments ? toNumberFormat(comments) : '-'} title='Отзывы' />
							<BrandStats count={subscribers ? toNumberFormat(subscribers) : '-'} title='Подписчики' />
							<BrandStats count={posts ? toNumberFormat(posts) : '-'} title='Посты' />
						</Flex>
					)}
				</Flex>
				{!shortened && (
					<Flex vertical gap={8}>
						<Flex className={classes.link}>
							Оплата и доставка{' '}
							{<ArrowSmallIcon width={20} height={20} style={{transform: 'rotate(-90deg)', marginLeft: 4}} />}
						</Flex>
						<Flex onClick={openModal} className={classes.link}>
							Персональный заказ{' '}
							{<ArrowSmallIcon width={20} height={20} style={{transform: 'rotate(-90deg)', marginLeft: 4}} />}
						</Flex>
					</Flex>
				)}
				<Flex vertical gap={12}>
					{!shortened && <ButtonBase buttonSize='medium'>Подписаться</ButtonBase>}
				</Flex>

				{!shortened && (
					<Flex justify='space-between'>
						<ExclamationIcon className={classes.linkIcon} />
						<Flex gap={16}>
							<SharePopover>
								<ShareIcon className={classes.linkIconNotPath} />
							</SharePopover>
							<HeartNormalIcon className={classes.linkIcon} />
						</Flex>
					</Flex>
				)}
			</Flex>
		</div>
	);
};
