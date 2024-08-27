import {Flex} from 'antd';
import {DeliveryItems} from '../../../../modules/Delivery';

export const ActiveTabPanel = () => {
	return (
		<Flex vertical gap={12} style={{marginTop: '12px'}}>
			<DeliveryItems />
		</Flex>
	);
};
