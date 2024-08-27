import {Flex, Typography} from 'antd';
import classes from '../styles.module.scss';
import AddToArchiveIcon from '../../../assets/icons/addToArchive.svg';

export const LayoutWithoutContent = () => {
	return (
		<Flex className={classes.publishesWrapperWithoutContent} align='center' justify='center'>
			<Typography.Text>
				Здесь будут отображаться публикации, которые вы сохранили, нажав на иконку <AddToArchiveIcon />
			</Typography.Text>
		</Flex>
	);
};
