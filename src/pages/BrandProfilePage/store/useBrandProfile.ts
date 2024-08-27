import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';
import {Brand} from '../../../app/models/Types';
import {apiShops} from '../../../app/api/shops/api';

export interface BrandProfileState {
	brandInfo: Brand;
	isLoading: boolean;
	error: null | string;
	getBrandInfo: (id: string) => void;
}

export const useBrandProfile = create<BrandProfileState>()(
	devtools(
		immer((set) => ({
			brandInfo: {} as Brand,
			isLoading: false,
			error: null,
			getBrandInfo: (id) => {
				set({isLoading: true});

				apiShops
					.getShop(id)
					.then((brand) => {
						set({brandInfo: brand});
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
