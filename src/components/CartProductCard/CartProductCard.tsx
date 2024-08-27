import {Flex, Typography} from 'antd';
import clsx from 'clsx';
import {statuses} from '../../app/models/ProductCard';
import BrandIcon from '../../assets/icons/brand.svg';
import DeleteIcon from '../../assets/icons/delete.svg';
import HeartNormalIcon from '../../assets/icons/heartNormal.svg';
import {Badge} from '../../ui/Badge/Badge';
import {ButtonBase} from '../../ui/Button/ButtonBase';
import {Checkbox} from '../../ui/Checkbox/Checkbox';
import {CartCounter} from '../../ui/CartCounter/CartCounter';
import {toMoneyFormat} from '../../utils/toMoneyFormat';
import classes from './styles.module.scss';
import {useEffect, useState} from 'react';

interface Props {
	title: string;
	brand: string;
	price: string | number;
	quantity: number;
	disabled?: boolean;
	imgSrc?: string;
	oldPrice?: string;
	discount?: number;
	statuses?: statuses[];
	isCheckedAllDelete?: boolean;
}

export const CartProductCard = ({
	title,
	brand,
	imgSrc,
	price,
	oldPrice,
	discount,
	quantity,
	disabled,
	statuses,
	isCheckedAllDelete,
}: Props) => {
	const [isChecked, setIsChecked] = useState(isCheckedAllDelete);
	const [activeHeart, setActiveHeart] = useState(false);

	useEffect(() => {
		if (isCheckedAllDelete) {
			setIsChecked(true);
		} else {
			setIsChecked(false);
		}
	}, [isCheckedAllDelete]);

	return (
		<Flex vertical className={clsx({[classes.card]: true, [classes.disabled]: disabled})}>
			<Flex gap={16}>
				<div className={classes.img}>
					{imgSrc && <img src={imgSrc} alt='' />}
					<div className={classes.statuses}>
						{statuses?.map((status, index) => (
							<Badge key={index} type={status} value={status === 'discount' ? discount : status} />
						))}
					</div>
				</div>
				<Flex vertical gap={disabled ? 20 : 21} className={classes.info}>
					<Typography.Paragraph ellipsis={{rows: 2}} className={classes.title}>
						{title}
					</Typography.Paragraph>
					<Flex vertical gap={4}>
						<div>Размер: М</div>
						<div>Цвет: красный</div>
					</Flex>
					<Flex gap={4} className={classes.brand} align='center'>
						<BrandIcon />
						<span>{brand}</span>
					</Flex>
					<Flex gap={8} className={classes.price} align='center'>
						<div>{disabled ? 'Нет в наличии' : toMoneyFormat(+price)}</div>
						{oldPrice && !disabled && <div className={classes.oldPrice}>{toMoneyFormat(+oldPrice)}</div>}
					</Flex>
				</Flex>
			</Flex>
			<Flex justify='space-between' className={classes.controls}>
				<Flex gap={12} className={clsx(classes.main, activeHeart && classes.heartActive)}>
					<HeartNormalIcon onClick={() => setActiveHeart(!activeHeart)} />
					<DeleteIcon />
				</Flex>
				{disabled && (
					<ButtonBase buttonType='secondary' buttonSize='normal' style={{width: '116px'}}>
						Удалить
					</ButtonBase>
				)}
				{!disabled && <CartCounter value={quantity} />}
			</Flex>
			<div className={classes.checkbox}>
				<Checkbox
					checked={!disabled && isChecked}
					onChange={() => {
						setIsChecked(!isChecked);
					}}
				/>
			</div>
		</Flex>
	);
};
