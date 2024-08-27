import {Flex} from 'antd';
import classes from './styles.module.scss';
import {Block} from './components/Block/Block';

const blocksListData = [
	{
		title: 'Доставки',
		placeholder: 'Здесь будут отображаться отправленные изделия, которые вы заказали',
		items: ['Самовывоз', 'Курьером', 'Курьером', 'Курьером', 'Курьером', 'Курьером'],
	},
	{
		title: 'Ожидают отзыва',
		placeholder: 'Здесь будут отображаться изделия, которые ожидают отзыв',
		items: [],
	},
	{
		title: 'Купленные изделия',
		placeholder: 'Здесь будут отображаться уже полученные  изделия',
		items: [
			'https://avatars.mds.yandex.net/i?id=75900d581185d0961ef8b1727628aa801450548b-12495681-images-thumbs&n=13',
			'Курьером',
		],
	},
];

export const BlocksList = () => {
	return (
		<Flex vertical gap={12} className={classes.wrapper}>
			{blocksListData.map((item, index) => (
				<Block title={item.title} placeholder={item.placeholder} items={item.items} key={index} />
			))}
		</Flex>
	);
};
