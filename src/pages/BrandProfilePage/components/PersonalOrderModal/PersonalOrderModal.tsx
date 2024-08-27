import {Flex, Typography} from 'antd';
import HelpIcon from '../../../../assets/icons/help.svg';
import {OnExistProductsTabPanel} from './OnExistProductsTabPanel/OnExistProductsTabPanel';
import {NewIdeaTabPanel} from './NewIdeaTabPanel/NewIdeaTabPanel';
import {Modal} from '../../../../ui/Modal/Modal';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';
import {Tabs} from '../../../../ui/Tabs/Tabs';
import {Popover} from '../../../../ui/Popover/Popover';
import classes from './styles.module.scss';

interface Props {
	isModalOpen: boolean;
	closeModal: () => void;
}

export const PersonalOrderModal = ({isModalOpen, closeModal}: Props) => {
	return (
		<Modal
			footer={[
				<ButtonBase
					key='submit'
					onClick={closeModal}
					buttonType='secondary'
					buttonSize='medium'
					disabled
					width={'200px'}
				>
					Заказать
				</ButtonBase>,
			]}
			wrapClassName={classes.modal}
			classNames={{content: classes.content}}
			okText='Заказать'
			centered
			cancelButtonProps={{style: {display: 'none'}}}
			okButtonProps={{style: {display: 'none'}}}
			title={
				<Flex gap={16}>
					<Typography.Text>Персональный заказ</Typography.Text>
					<Popover
						placement='rightTop'
						withoutBorder
						content={
							<p
								style={{
									width: 197,
									margin: 0,
									fontSize: 12,
									fontStyle: 'normal',
									fontWeight: 400,
									lineHeight: '120%',
								}}
							>
								Вы можете заказать реализацию собственной идеи или изделие по мотивам уже размещенных в магазине
								товаров.
							</p>
						}
						trigger={'hover'}
					>
						<HelpIcon style={{cursor: 'pointer'}} />
					</Popover>
				</Flex>
			}
			open={isModalOpen}
			onOk={closeModal}
			onCancel={closeModal}
		>
			<Tabs
				isTabModal
				type='card'
				tabBarGutter={0}
				tabBarStyles={{background: '#fff', borderRadius: '16px'}}
				items={[
					{
						key: '1',
						label: 'На основе существующего изделия',
						children: <OnExistProductsTabPanel />,
					},
					{
						key: '2',
						label: 'Предложить свою идею',
						children: <NewIdeaTabPanel />,
					},
				]}
			/>
		</Modal>
	);
};
