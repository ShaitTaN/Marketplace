import {Flex, Typography} from 'antd';
import classes from './styles.module.scss';
import HeartNormalIcon from '../../../../assets/icons/heartNormal.svg';
import ArrowRight from '../../../../assets/icons/ArrowLeft.svg';

export const LayoutWithoutContent = () => {
	return (
		<Flex className={classes.layoutWithoutContent} vertical align='center' justify='center' gap={16}>
			<Typography.Text>Чтобы добавить изделие в «Избранное», нажмите на сердечко в карточке товара</Typography.Text>
			<Flex gap={9} className={classes.iconsBlock}>
				<HeartNormalIcon />
				<ArrowRight />
				<HeartNormalIcon />
			</Flex>
		</Flex>
	);
};
