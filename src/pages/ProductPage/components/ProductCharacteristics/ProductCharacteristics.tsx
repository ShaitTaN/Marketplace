import classes from './styles.module.scss';
import {Flex} from 'antd';

const items = [
	{
		title: 'Состав',
		description: '100% хлопок',
	},
	{
		title: 'Цвет',
		description: 'Белый',
	},
	{
		title: 'Размер на модели',
		description: '42',
	},
	{
		title: 'Особенности модели',
		description: 'Удлинённая',
	},
	{
		title: 'Декоративные элементы',
		description: 'Без элементов',
	},
];

export const ProductCharacteristics = () => {
	return (
		<Flex gap={16} vertical className={classes.characteristics}>
			<h3>Характеристики</h3>
			<Flex vertical gap={12}>
				{items.map((item, index) => (
					<p key={index}>
						<span>{item.title}:</span> {item.description}
					</p>
				))}
			</Flex>
		</Flex>
	);
};
