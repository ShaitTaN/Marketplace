import {Flex} from 'antd';
import {DeliveryItems} from '../../../../modules/Delivery';

export const ArchiveTabPanel = () => {
	return (
		<Flex vertical gap={12} style={{marginTop: '12px'}}>
			<DeliveryItems archived />
		</Flex>
	);
};
