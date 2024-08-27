import {Tabs as TabsAntd, TabsProps} from 'antd';
import classes from './styles.module.scss';
import clsx from 'clsx';

interface Props extends TabsProps {
	tabBarStyles?: React.CSSProperties;
	isTabLarge?: boolean;
	isTabModal?: boolean;
	topExtraContent?: React.ReactNode;
}

export const Tabs = ({items, tabBarStyles, isTabLarge, isTabModal, topExtraContent, ...props}: Props) => {
	const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => (
		<div className={clsx(classes.tabBar)} style={tabBarStyles || {}}>
			{topExtraContent && <div style={{marginBottom: '24px'}}>{topExtraContent}</div>}
			<DefaultTabBar {...props} />
		</div>
	);

	return (
		<TabsAntd
			renderTabBar={renderTabBar}
			className={clsx({
				[classes.tabs]: true,
				[classes.tabs_card]: props.type === 'card',
				[classes.tabs_large]: isTabLarge,
				[classes.tabs_modal]: isTabModal,
			})}
			items={items}
			{...props}
		/>
	);
};
