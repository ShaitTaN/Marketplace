import {Flex, FlexProps} from 'antd';

export const SbWrapper = ({children, ...props}: FlexProps) => {
	return (
		<Flex align='center' justify='center' style={{height: '100vh'}} {...props}>
			{children}
		</Flex>
	);
};
