import {Card, Flex, Typography} from 'antd';
import clsx from 'clsx';
import {useState} from 'react';
import {SubscriptionCard} from '../../app/models/SubscriptionCard';
import StarIcon from '../../assets/icons/star.svg';
import AvatarStatIcon from '../../assets/icons/avatarStat.svg';
import {Avatar} from '../../ui/Avatar/Avatar';
import {ButtonBase} from '../../ui/Button/ButtonBase';
import {Like} from '../../ui/Like/Like';
import {Link} from '../../ui/Link/Link';
import {toNumberFormat} from '../../utils/toNumberFormat';
import {ImageDisplay} from '../ImageDisplay/ImageDisplay';
import classes from './styles.module.scss';

interface Props extends SubscriptionCard {
	width?: string | number;
	isLikedType?: boolean;
}

export const BrandSubscriptionCard = ({
	brandName,
	subscribersCount,
	subscribed,
	avatarSrc,
	isLikedType,
	rate,
	width,
	imageArray,
}: Props) => {
	const [isSubscribed, setIsSubscribed] = useState(subscribed);

	return (
		<Card className={classes.brandSubscriptionCard} bordered={false} style={{width}}>
			<Flex vertical gap={16}>
				<Flex gap={16} align='center' className={classes.cardContent}>
					<Avatar
						avatarSize={!isLikedType ? 'normal' : 'small'}
						avatarType='not-bordered'
						src={avatarSrc ? <ImageDisplay url={avatarSrc} /> : !isLikedType && <AvatarStatIcon />}
						alt={brandName}
						className={!isLikedType ? classes.avatar : ''}
					/>
					<Flex vertical gap={4} className={classes.brandInfo}>
						<Link size='medium' to={'/brand-profile/' + brandName}>
							<Typography.Paragraph className={classes.title + ' titleNotCopy'} ellipsis={true}>
								{brandName}
							</Typography.Paragraph>
						</Link>
						<Flex gap={8}>
							{isLikedType && (
								<Flex gap={2} align='center'>
									<StarIcon width={16} height={16} />
									<Typography className={classes.rate}>{rate}</Typography>
								</Flex>
							)}
							<Typography.Paragraph className={classes.text}>
								{!isLikedType
									? subscribersCount?.toLocaleString('ru') + ' подписчиков'
									: toNumberFormat(subscribersCount!) + ' подписчиков'}
							</Typography.Paragraph>
						</Flex>
					</Flex>
				</Flex>
				{!isLikedType ? (
					<ButtonBase
						buttonSize='medium'
						buttonType={isSubscribed ? 'secondary' : 'primary'}
						onClick={() => setIsSubscribed(!isSubscribed)}
					>
						{isSubscribed ? 'Вы подписаны' : 'Подписаться'}
					</ButtonBase>
				) : (
					<Flex gap={6}>
						{imageArray?.slice(0, 4).map((image) => (
							<div style={{width: 90, height: 90}}>
								<ImageDisplay url={image} />
							</div>
						))}
					</Flex>
				)}
			</Flex>
			{isLikedType && (
				<div
					onClick={() => setIsSubscribed(!isSubscribed)}
					className={clsx(classes.heartIcon, isSubscribed && classes.heartActive)}
				>
					<Like handleClick={setIsSubscribed} isLikedProps={isSubscribed} />
				</div>
			)}
		</Card>
	);
};
