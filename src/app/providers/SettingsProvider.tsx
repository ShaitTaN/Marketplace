import React, {useEffect} from 'react';
import {useSettingsStore} from '../store/globalStore';

export const SettingsProvider = ({children}: {children: React.ReactNode}) => {
	const {setIsInit} = useSettingsStore();
	useEffect(() => {
		setIsInit();
	}, [setIsInit]);

	return <>{children}</>;
};
