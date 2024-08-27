import {Flex} from 'antd';
import {PublicationItems} from '../../../../modules/Publications/components/PublicationItems/PublicationItems';
import {TextTabs} from '../../../../ui/TextTabs/TextTabs';

export const PublishsTabPanel = () => {
	return (
		<div>
			<div style={{background: 'white', padding: '24px 24px 24px', borderRadius: '0 0 8px 8px'}}>
				<TextTabs padding='0px 67px 10px 67px' tabs={['Подобрано для вас', 'Подписки', 'Новинки', 'Популярные']} />
			</div>
			<Flex gap={12} wrap='wrap' style={{marginTop: '12px'}}>
				<PublicationItems />
			</Flex>
		</div>
	);
};
