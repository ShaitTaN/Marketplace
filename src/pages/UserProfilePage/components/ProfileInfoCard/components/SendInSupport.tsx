import {Flex} from 'antd';
import classes from '../styles.module.scss';
import LogoOnBlack from '../../../../../assets/icons/logoOnBlack.svg';
import {Link} from 'react-router-dom';

export const SendInSupport = () => {
	return (
		<div style={{borderRadius: '8px'}} className={classes.textWithImgWrapper}>
			<Flex gap={4} align='center'>
				<LogoOnBlack />
				<Link to={'/'} className={classes.exitText}>
					Написать в поддержку
				</Link>
			</Flex>
		</div>
	);
};
