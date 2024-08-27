import {Flex, Layout} from 'antd';
import {Outlet} from 'react-router-dom';
import {ProfileInfoCard} from '../../pages/UserProfilePage/components/ProfileInfoCard/ProfileInfoCard';
import { Wrapper } from '../../ui/Wrapper/Wrapper';

export const UserProfileLayout = () => {
	return (
		<Layout style={{minHeight: '100vh'}}>
			<Wrapper withCookies vertical gap={12} style={{padding: '12px 0 24px 0'}}>
				<Flex gap={12}>
					<ProfileInfoCard />
					<Outlet />
				</Flex>
			</Wrapper>
		</Layout>
	);
};
