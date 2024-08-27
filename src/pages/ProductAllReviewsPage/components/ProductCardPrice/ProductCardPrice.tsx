import {Flex, Typography} from 'antd';
import {useState} from 'react';
import HelpIcon from '../../../../assets/icons/help.svg';
import HeartIcon from '../../../../assets/icons/heartNormal.svg';
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

interface Props {
	price: number;
	title: string;
	rate?: number;
	comments?: number;
	productsCount?: number;
}

const productComplaint = [
	{label: 'Неверное описание/фото', value: 'Неверное описание/фото'},
	{label: 'Контрафакт/подделка', value: 'Контрафакт/подделка'},
	{label: 'Мошенничество', value: 'Мошенничество'},
	{label: 'Фейковые отзывы', value: 'Фейковые отзывы'},
	{label: 'Запрещённый товар', value: 'Запрещённый товар'},
	{label: 'Другое', value: 'Другое'},
];

export const ProductCardPrice = ({price, title, rate, comments, productsCount}: Props) => {
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
				<Flex gap={12}>
					<Flex gap={4} align='center'>
						<StarIcon width={12} height={12} />
						<Link component='button'>{rate ?? 0}</Link>
					</Flex>
					<Link component='button'>{comments ? `${comments} отзыва` : 'нет отзывов'}</Link>
				</Flex>
			</Flex>
			<Typography className={classes.lostProductons}>
				{productsCount ? `Осталось: ${productsCount} шт.` : 'Нет в наличии'}
			</Typography>
			<Flex justify='space-between' align='center'>
				<Typography className={classes.price}>{price ?? 0} ₽</Typography>
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
				<ButtonBase buttonSize='medium' onClick={onAddToCart}>
					{isInCart ? 'Перейти в корзину' : 'Добавить в корзину'}
				</ButtonBase>
				<ButtonBase buttonType='secondary' buttonSize='medium'>
					Купить сейчас
				</ButtonBase>
			</Flex>
			<Flex justify='space-between'>
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
					<HelpIcon style={{cursor: 'pointer'}} className={classes.helpIcon} onClick={onOpenComplaintModal} />
				</Popover>
				<div style={{cursor: 'pointer'}}>
					<ShareIcon style={{width: '24px', height: '24px'}} />
					<HeartIcon className={classes.actionsIcon} style={{width: '24px', height: '24px', marginLeft: '16px'}} />
				</div>
			</Flex>
			<TableSizesModal open={isTableSizesOpen} onClose={() => setIsTableSizesOpen(false)} />
			<ProductSizeModal
				open={isProductSizeOpen}
				value={size}
				onClose={() => setIsProductSizeOpen(false)}
				onChange={setSize}
				onClickTableSizes={onOpenModalTableSizes}
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
