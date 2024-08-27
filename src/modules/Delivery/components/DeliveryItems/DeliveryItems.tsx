import {useEffect, useState} from 'react';
import {DeliveryItem} from '../../../../components/DeliveryItem/DeliveryItem';
import {Delivery} from '../../../../app/models/Delivery';
import {Spin} from 'antd';

const items: Delivery[] = [
	{
		title: 'Brand Name',
		id: '25660751-0029',
		date: '12 марта',
		status: 'отправлен',
		delivery: 'в пункт выдачи СДЭК',
		trackingId: '45005145009749',
		paid: '50700',
		products: ['img', 'img', 'img', 'img', 'img', 'img'],
	},
	{
		title: 'Brand Name',
		id: '25660751-0029',
		date: '13 марта',
		status: 'оплачен, ждёт отправления',
		delivery: 'курьером Яндекс. Доставки',
		paid: '50700',
		products: ['img'],
	},
	{
		title: 'Brand Name',
		id: '25660751-0029',
		date: '14 марта',
		status: 'создан, ждёт оплаты',
		delivery: 'в пункт выдачи СДЭК',
		trackingId: '45005145009749',
		paid: null,
		products: ['img', 'img'],
	},
];

const archivedItems: Delivery[] = [
	{
		title: 'Brand Name',
		id: '25660751-0029',
		date: '12 марта',
		status: 'отправлен',
		delivery: 'в пункт выдачи СДЭК',
		trackingId: '45005145009749',
		paid: '50700',
		products: ['img'],
	},
	{
		title: 'Brand Name',
		id: '25660751-0029',
		date: '12 марта',
		status: 'оплачен, ждёт отправления',
		delivery: 'курьером Яндекс. Доставки',
		paid: '50700',
		products: ['img'],
	},
];

const getDeliveryItems = (archived: boolean): Promise<Delivery[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			if (archived) {
				resolve(archivedItems);
			} else {
				resolve(items);
			}
		}, 1000);
	});
};

interface Props {
	archived?: boolean;
}

export const DeliveryItems = ({archived = false}: Props) => {
	const [items, setItems] = useState<Delivery[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getDeliveryItems(archived)
			.then((data) => setItems(data))
			.finally(() => setIsLoading(false));
	}, [archived]);

	return (
		<>
			{items.map((item, index) => (
				<DeliveryItem
					key={index}
					title={archived ? item.title : `№${index + 1}, ${item.title}`}
					id={item.id}
					date={item.date}
					status={item.status}
					delivery={item.delivery}
					trackingId={item.trackingId}
					paid={item.paid}
					products={item.products}
					archived={archived}
				/>
			))}
			{isLoading && <Spin size='large' />}
		</>
	);
};
