import {Modal} from '../../../../ui/Modal/Modal';
import {Flex, Typography} from 'antd';
import classes from './styles.module.scss';
import {Tabs} from '../../../../ui/Tabs/Tabs';
import {PickUpTabPanel} from './components/PickUpTabPanel/PickUpTabPanel';
import {DeliveryTabPanel} from './components/DeliveryTabPanel/DeliveryTabPanel';

interface Props {
	showModal: boolean;
	handleCloseModal: () => void;
}

export const CartCheckoutOrderModal = ({showModal, handleCloseModal}: Props) => {
	return (
		<Modal wrapClassName={classes.modalWrapper} open={showModal} footer={null} centered onCancel={handleCloseModal}>
			<Flex gap={24} className={classes.container}>
				<Flex vertical gap={16} className={classes.info}>
					<Typography.Title level={4} className={classes.title}>
						Способ доставки
					</Typography.Title>
					<Tabs
						type='card'
						centered
						tabBarGutter={0}
						tabBarStyles={{background: '#fff'}}
						items={[
							{
								key: '1',
								label: <span>В пункт выдачи</span>,
								children: <PickUpTabPanel />,
							},
							{
								key: '2',
								label: <span>Курьером</span>,
								children: <DeliveryTabPanel />,
							},
						]}
					/>
				</Flex>
				<div className={classes.map}></div>
			</Flex>
		</Modal>
	);
};
