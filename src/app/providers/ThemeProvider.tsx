import {ConfigProvider} from 'antd';
import React from 'react';

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
	return (
		<ConfigProvider
			theme={{
				token: {
					fontFamily: 'Inter',
				},
			}}
		>
			{children}
		</ConfigProvider>
	);
};
