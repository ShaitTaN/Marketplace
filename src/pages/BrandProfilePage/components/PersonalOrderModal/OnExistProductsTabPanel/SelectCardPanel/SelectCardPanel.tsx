import {Flex, Radio as RadioAntd, RadioChangeEvent} from 'antd';
import classes from './styles.module.scss';
import {useState} from 'react';
import clsx from 'clsx';
import {Radio} from '../../../../../../ui/Radio/Radio';
import {SelectCardProduct} from '../../../../../../components/SelectCardProduct/SelectCardProduct';
import {Pagination} from '../../../../../../ui/Pagination/Pagination';

const testArrayCard = [
	{
		title: 'Костюм васильковый с брюками и рубашкой кра',
		imgSrc:
			'https://s3-alpha-sig.figma.com/img/a05a/796b/cf1b4bad3a1b9c26788828ba32dce421?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lw-2uW~nvoIvUU7ubr9gUUkAUw8vcIej7iypQKBEY3zTepXV1xTz0qmR00cDnVIy9AZsfOTq79zejxeOlAuk5p6LcehnhgBg5nqpN5xKLd6QdhgxOKygnPmQ-0xZ0TyVbuwvw~EG81f-pzCMgueZB7JRXimSDJvpi9fpiuzIU7vG-XWuUDUky6G5aoKAgnfFPonW5SifAHU~5-ZwaYtVmYRqXS~FQFOZQLe0E6P~-nVLJ2OeREHz7pDfX0lBF~GiKp1D9rMYCdquc0W7zjYb93tjf9yI0TT2Y8mW4fCg7p28y5DDgQzXYzWy~EjNYHQ39Y83jZbMf0B5eVoirpAXzQ__',
	},
	{
		title: 'Костюм фиолетовый с брюками и рубашкой кра',
	},
	{
		title: 'Костюм розовый с брюками и рубашкой кра',
		imgSrc:
			'https://s3-alpha-sig.figma.com/img/a05a/796b/cf1b4bad3a1b9c26788828ba32dce421?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lw-2uW~nvoIvUU7ubr9gUUkAUw8vcIej7iypQKBEY3zTepXV1xTz0qmR00cDnVIy9AZsfOTq79zejxeOlAuk5p6LcehnhgBg5nqpN5xKLd6QdhgxOKygnPmQ-0xZ0TyVbuwvw~EG81f-pzCMgueZB7JRXimSDJvpi9fpiuzIU7vG-XWuUDUky6G5aoKAgnfFPonW5SifAHU~5-ZwaYtVmYRqXS~FQFOZQLe0E6P~-nVLJ2OeREHz7pDfX0lBF~GiKp1D9rMYCdquc0W7zjYb93tjf9yI0TT2Y8mW4fCg7p28y5DDgQzXYzWy~EjNYHQ39Y83jZbMf0B5eVoirpAXzQ__',
	},
	{
		title: 'Костюм белый с брюками и рубашкой кра',
	},
	{
		title: 'Костюм синий с брюками и рубашкой кра',
	},
	{
		title: 'Костюм красный с брюками и рубашкой кра',
	},
	{
		title: 'Костюм черный с брюками и рубашкой кра',
	},
	{
		title: 'Костюм желтый с брюками и рубашкой кра',
	},
	{
		title: 'Костюм бирюзовый с брюками и рубашкой кра',
	},
	{
		title: 'Костюм каштановый с брюками и рубашкой кра',
	},
	{
		title: 'Костюм бурый с брюками и рубашкой кра',
	},
	{
		title: 'Костюм салатовый с брюками и рубашкой кра',
	},
];

export const SelectCardPanel = ({show}: {show: boolean}) => {
	const [value, setValue] = useState('');

	const handleChange = (e: RadioChangeEvent) => {
		setValue(e.target.value);
	};

	return (
		<Flex vertical gap={20} className={clsx(classes.selectCardPanel, show && classes.show)}>
			<Flex gap={16} vertical>
				<RadioAntd.Group className={classes.gridWrapper} value={value} onChange={handleChange}>
					{testArrayCard.map((item, index) => (
						<SelectCardProduct
							value={value}
							title={item.title}
							imgSrc={item.imgSrc}
							key={index}
							extraImgContent={<Radio value={item.title} />}
						/>
					))}
				</RadioAntd.Group>
			</Flex>
			<Flex align='center' justify='center'>
				<Pagination />
			</Flex>
		</Flex>
	);
};
