import {Flex} from 'antd';
import {ButtonBase} from '../../ui/Button/ButtonBase';
import {Wrapper} from '../../ui/Wrapper/Wrapper';
import {Banner} from './components/Banner/Banner';
import {MainStories} from './components/MainStories/MainStories';
import {MainTabs} from './components/MainTabs/MainTabs';

export const MainPage = () => {
	return (
		<Wrapper withCookies vertical gap={12} style={{padding: '12px 0', marginBottom: '12px'}}>
			<MainStories />
			<Banner />
			<MainTabs />
			<Flex justify='center' align='center' style={{marginTop: '12px'}}>
				<ButtonBase style={{width: '200px'}} buttonSize='medium'>
					Показать ещё
				</ButtonBase>
			</Flex>
		</Wrapper>
	);
};
