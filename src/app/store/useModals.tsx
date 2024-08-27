import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';
import {Modals} from '../models/Modals';

interface ModalsState {
	modals: Record<Modals, {isOpen: boolean}>;
	openModalByName: (modalName: Modals) => void;
	closeModalByName: (modalName: Modals) => void;
}

export const useModals = create<ModalsState>()(
	devtools(
		immer((set) => ({
			modals: {
				[Modals.Catalog]: {
					isOpen: false,
				},
				[Modals.Login]: {
					isOpen: false,
				},
				[Modals.Register]: {
					isOpen: false,
				},
			},
			openModalByName: (modalName) =>
				set((state) => {
					state.modals[modalName].isOpen = true;
				}),
			closeModalByName: (modalName) =>
				set((state) => {
					state.modals[modalName].isOpen = false;
				}),
		}))
	)
);
