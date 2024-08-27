import {Flex, Typography} from 'antd';
import {useState} from 'react';
import HelpIcon from '../../../../assets/icons/exclamationCircle.svg';
import ShareIcon from '../../../../assets/icons/share.svg';
import StarIcon from '../../../../assets/icons/star.svg';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';
import {Link} from '../../../../ui/Link/Link';
import {RadioGroup} from '../../../../ui/RadioGroup/Radio';
import {TableSizesModal} from '../TableSizesModal/TableSizesModal';
import classes from './styles.module.scss';
import {ProductSizeModal} from '../ProductSizeModal/ProductSizeModal';
import {useNavigate} from 'react-router-dom';
import {routesLinksEnum} from '../../../../app/routes';
import {Popover} from '../../../../ui/Popover/Popover';
import {ComplaintModal} from '../../../../components/Complaint/components/ComplaintModal/ComplaintModal';
import {BasicCounter} from '../../../../ui/BasicCounter/BasicCounter';
import Arrow from '../../../../assets/icons/back.svg';
import clsx from 'clsx';
import {Like} from '../../../../ui/Like/Like';
interface Props {
	price: number;
	title: string;
	rate?: number;
	comments?: number;
	productsCount?: number;
	discountPrice?: number;
}

const productComplaint = [
	{label: 'Неверное описание/фото', value: 'Неверное описание/фото'},
	{label: 'Контрафакт/подделка', value: 'Контрафакт/подделка'},
	{label: 'Мошенничество', value: 'Мошенничество'},
	{label: 'Фейковые отзывы', value: 'Фейковые отзывы'},
	{label: 'Запрещённый товар', value: 'Запрещённый товар'},
	{label: 'Другое', value: 'Другое'},
];

export const ProductCardPrice = ({price, title, rate, comments, productsCount, discountPrice}: Props) => {
	const [isTableSizesOpen, setIsTableSizesOpen] = useState(false);
	const [isProductSizeOpen, setIsProductSizeOpen] = useState(false);
	const [isComplaintModalOpen, setIsComplaintModalOpen] = useState(false);
	const [isInCart, setIsInCart] = useState(false);
	const [size, setSize] = useState<string>('');
	const navigate = useNavigate();

	const onOpenModalTableSizes = () => {
		setIsTableSizesOpen(true);
		setIsProductSizeOpen(false);
	};

	const onOpenModalProductSize = () => {
		setIsProductSizeOpen(true);
	};

	const onOpenComplaintModal = () => {
		setIsComplaintModalOpen(true);
	};

	const onAddToCart = () => {
		if (!size) {
			onOpenModalProductSize();
			return;
		}
		if (isInCart) {
			navigate(routesLinksEnum.cart);
			return;
		}
		setIsInCart(true);
	};

	return (
		<Flex className={classes.productCardPrice} vertical gap={20}>
			<Flex vertical gap={12}>
				<Typography className={classes.title}>{title}</Typography>
				<Flex gap={!comments ? 0 : 12}>
					<Flex gap={4} align='center'>
						<StarIcon width={12} height={12} className={clsx({[classes.disabled]: !rate})} />
						{!!rate && <Link component='button'>{rate}</Link>}
						{!rate && !comments && <Typography.Text className={classes.noRate}>Нет оценок</Typography.Text>}
					</Flex>
					<Link disabled={!comments} component='button'>
						{!!comments && `${comments} отзыва`}
					</Link>
				</Flex>
			</Flex>
			<Typography className={classes.lostProductons}>
				{productsCount ? `Осталось: ${productsCount} шт.` : 'Нет в наличии'}
			</Typography>
			<Flex justify='space-between' align='center'>
				{!discountPrice ? (
					<Typography className={classes.price}>{price ?? 0} ₽</Typography>
				) : (
					<Flex gap={4} align='end'>
						<Typography className={classes.price}>{discountPrice} ₽</Typography>
						<Typography className={clsx(classes.price, classes.oldPrice)}>{price} ₽</Typography>
					</Flex>
				)}
			</Flex>
			<Flex vertical gap={12}>
				<Link component='button' onClick={onOpenModalTableSizes}>
					Таблица размеров
				</Link>
				<RadioGroup
					radioButtons={[{value: 'XS'}, {value: 'S'}, {value: 'M'}, {value: 'L'}, {value: 'XL', disabled: true}]}
					gap={8}
					value={size}
					onChange={(e) => setSize(e.target.value)}
				/>
			</Flex>
			<Flex vertical gap={12}>
				{size && isInCart ? (
					<Flex gap={13}>
						<ButtonBase
							buttonType='primary'
							buttonSize='medium'
							iconLeft={<Arrow style={{marginRight: '8px'}} />}
							onClick={onAddToCart}
						>
							Корзина
						</ButtonBase>
						<BasicCounter value={1} />
					</Flex>
				) : (
					<ButtonBase buttonSize='medium' onClick={onAddToCart}>
						Добавить в корзину
					</ButtonBase>
				)}
				<ButtonBase buttonType='secondary' buttonSize='medium'>
					Купить сейчас
				</ButtonBase>
			</Flex>
			<Flex justify='space-between' style={{height: '24px'}}>
				<Popover
					withoutBorder
					overlayClassName={classes.helpPopover}
					placement='bottomRight'
					content={
						<Flex className={classes.helpText}>
							<span>Пожаловаться на изделие</span>
						</Flex>
					}
					trigger={['hover', 'click']}
				>
					<HelpIcon
						style={{cursor: 'pointer', width: '24px', height: '24px'}}
						className={classes.helpIcon}
						onClick={onOpenComplaintModal}
					/>
				</Popover>
				<Flex style={{cursor: 'pointer'}} align='center' gap={8}>
					<ShareIcon style={{width: '24px', height: '24px'}} />
					<Like />
				</Flex>
			</Flex>
			<TableSizesModal open={isTableSizesOpen} onClose={() => setIsTableSizesOpen(false)} />
			<ProductSizeModal
				open={isProductSizeOpen}
				value={size}
				onClose={() => setIsProductSizeOpen(false)}
				onChange={setSize}
				onClickTableSizes={onOpenModalTableSizes}
				onSizeChange={setIsInCart}
			/>
			<ComplaintModal
				open={isComplaintModalOpen}
				onClose={() => setIsComplaintModalOpen(false)}
				title='изделие'
				subtitle='изделием'
				radioButtons={productComplaint}
			/>
		</Flex>
	);
};
