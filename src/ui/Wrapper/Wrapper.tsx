import {Flex, FlexProps} from 'antd';
import classes from './styles.module.scss';
import {Cookies} from '../../modules/Coockies';

interface Props extends FlexProps {
	withCookies?: boolean;
}

export const Wrapper = ({children, withCookies = false, ...props}: Props) => {
	return (
		<Flex className={classes.wrapper} {...props}>
			{children}
			{withCookies && <Cookies />}
		</Flex>
	);
};
