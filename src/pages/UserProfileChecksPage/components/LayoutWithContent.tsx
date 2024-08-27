import {ChecksCard} from '../../../app/models/ChecksCard';
import {Flex} from 'antd';
import {CheckItems} from '../../../modules/Checks';

interface Props {
	checksData: ChecksCard[];
}

export const LayoutWithContent = ({checksData}: Props) => {
	return (
		<Flex vertical gap={12}>
			<CheckItems checksData={checksData} />
		</Flex>
	);
};
