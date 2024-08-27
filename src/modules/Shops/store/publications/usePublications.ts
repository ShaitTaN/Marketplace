import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';
import {apiShops} from '../../../../app/api/shops/api';
import {Publication} from '../../../../app/models/Types';

export interface PublicationsState {
	publications: Publication[];
	isLoading: boolean;
	error: null | string;
	getPublications: (id: string) => void;
}

export const usePublications = create<PublicationsState>()(
	devtools(
		immer((set) => ({
			publications: [] as Publication[],
			isLoading: false,
			error: null,
			getPublications: (id) => {
				set({isLoading: true});

				apiShops
					.getShopPublications(id)
					.then((publications) => {
						set({publications: publications});
					})
					.catch((error) => {
						set({error: error});
					})
					.finally(() => {
						set({isLoading: false});
					});
			},
		}))
	)
);
