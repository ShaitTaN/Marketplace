import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';

interface SettingsProps {
	showCookies: boolean;
	isInit: boolean;
	setShowCookies: (show: boolean) => void;
	setIsInit: () => void;
}

export const useSettingsStore = create(
	devtools(
		immer<SettingsProps>((set) => ({
			showCookies: true,
			isInit: false,
			setIsInit: () => set({isInit: true}),
			setShowCookies: (show) => set({showCookies: show}),
		}))
	)
);
