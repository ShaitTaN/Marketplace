import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';
import {Product} from '../../../../app/models/Types';
import {apiShops} from '../../../../app/api/shops/api';

export interface ProductsState {
	products: Product[];
	isLoading: boolean;
	error: null | string;
	getProducts: (id: string) => void;
}

export const useProducts = create<ProductsState>()(
	devtools(
		immer((set) => ({
			products: [] as Product[],
			isLoading: false,
			error: null,
			getProducts: (id) => {
				set({isLoading: true});

				apiShops
					.getShopProducts(id)
					.then((products) => {
						set({products: products});
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
