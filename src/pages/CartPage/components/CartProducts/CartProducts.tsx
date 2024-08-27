import {Flex} from 'antd';
import {Product} from '../../../../app/models/ProductCard';
import {CartProductCard} from '../../../../components/CartProductCard/CartProductCard';
import {Checkbox} from '../../../../ui/Checkbox/Checkbox';
import classes from './styles.module.scss';
import {useState} from 'react';

interface Props {
	products: (Product & {quantity: number})[];
}

export const CartProducts = ({products}: Props) => {
	const [isCheckedAllDelete, setIsCheckedAllDelete] = useState(true);

	return (
		<Flex vertical gap={12} className={classes.cartProducts}>
			<div className={classes.cart}>
				<Flex justify='space-between' align='center' style={{marginBottom: '24px'}}>
					<h3>Корзина</h3>
					<Flex gap={12} align='center'>
						<div className={classes.delete}>Удалить</div>
						<Checkbox onChange={() => setIsCheckedAllDelete(!isCheckedAllDelete)} checked={isCheckedAllDelete} />
					</Flex>
				</Flex>
				<Flex vertical gap={36}>
					{products.map((product, i) => (
						<CartProductCard
							key={i + product.title}
							imgSrc={product.image}
							title={product.title}
							brand={product.brand}
							price={product.price}
							oldPrice={product.oldPrice}
							discount={product.discount}
							quantity={product.quantity}
							statuses={product.statuses}
							isCheckedAllDelete={isCheckedAllDelete}
						/>
					))}
				</Flex>
			</div>
			<div className={classes.disabled}>
				<Flex justify='space-between' align='center' style={{marginBottom: '24px'}}>
					<h3>Недоступны для заказа</h3>
				</Flex>
				<Flex vertical gap={36}>
					<CartProductCard
						title='Чёрное терракотовое платье с застежкой на пуговицы текст текст текст текст текст текст текст текст текст'
						brand='Brand'
						price={'18500'}
						quantity={1}
						disabled
					/>
					<CartProductCard
						title='Чёрное терракотовое платье с застежкой на пуговицы текст текст текст текст текст текст текст текст текст'
						brand='Brand'
						price={'18500'}
						quantity={1}
						disabled
					/>
				</Flex>
			</div>
		</Flex>
	);
};
