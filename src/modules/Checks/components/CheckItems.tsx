import {ChecksCard} from '../../../app/models/ChecksCard';
import {CheckCard} from '../../../components/CheckCard/CheckCard';

interface Props {
	checksData: ChecksCard[];
}

export const CheckItems = ({checksData}: Props) => {
	return (
		<>
			{checksData.map((item, index) => (
				<CheckCard key={index} order={item.order} brandName={item.brandName} date={item.date} price={item.price} />
			))}
		</>
	);
};
