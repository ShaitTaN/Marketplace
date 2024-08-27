import {Flex} from 'antd';
import {Footer as FooterAntd} from 'antd/es/layout/layout';
import classes from './styles.module.scss';
import {FooterInfo} from '../FooterInfo/FooterInfo';

export const Footer = () => {
	return (
		<FooterAntd className={classes.footer}>
			<Flex className={classes.flex}>
				<FooterInfo />
			</Flex>
		</FooterAntd>
	);
};
