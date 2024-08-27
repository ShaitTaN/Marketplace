import {Flex} from 'antd';
import classes from './styles.module.scss';

interface Props {
	description: string;
}

export const ProductDescription = ({description}: Props) => {
	return (
		<Flex gap={16} vertical className={classes.description}>
			<h3>Описание</h3>
			<Flex vertical gap={10} className='titleNotCopy'>
				{description && <p>{description}</p>}
				{!description && <p>Нет описания</p>}
			</Flex>
		</Flex>
	);
};
