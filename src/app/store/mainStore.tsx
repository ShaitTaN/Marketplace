import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';

interface SettingsProps {
	isAutenticated: boolean;
	setIsAutenticated: () => void;
}

export const useMainSettings = create(
	devtools(
		immer<SettingsProps>((set) => ({
			isAutenticated: false,
			setIsAutenticated: () => set({isAutenticated: true}),
		}))
	)
);
