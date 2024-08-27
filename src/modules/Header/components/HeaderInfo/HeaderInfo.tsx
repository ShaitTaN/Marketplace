import {Link} from 'react-router-dom';
import classes from './styles.module.scss';
import {Flex} from 'antd';

export const HeaderInfo = () => {
	return (
		<Flex gap={25} align='flex-end' className={classes.flex}>
			<Link to='/' className={classes.link}>
				Зарегистрировать бренд
			</Link>
			<Link to='/' className={classes.link}>
				Помощь
			</Link>
		</Flex>
	);
};
