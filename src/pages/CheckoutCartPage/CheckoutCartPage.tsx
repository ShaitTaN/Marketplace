import {Flex} from 'antd';
import {Wrapper} from '../../ui/Wrapper/Wrapper';
import {CardCartPrice} from '../../components/CardCartPrice/CardCartPrice';
import { OrdersBlock } from './components/OrdersBlock/OrdersBlock';
import { ShippingDetails } from './components/ShippingDetails/ShippingDetails';
export const CheckoutCartPage = () => {
	return (
		<Wrapper style={{padding: '12px 0', flexDirection: 'column'}}>
			<Flex justify='space-between' align='flex-start' style={{width: '100%'}} gap={12}>
				<Flex gap={12} vertical>
					<ShippingDetails />
					<OrdersBlock />
				</Flex>
				<CardCartPrice productsCount={3} price={32000} withDelivery />
			</Flex>
		</Wrapper>
	);
};
