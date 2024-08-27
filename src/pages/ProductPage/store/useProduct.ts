import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';
import {ProductExtended} from '../../../app/models/Types';
import {apiProducts} from '../../../app/api/products/api';

export interface ProductState {
	productInfo: ProductExtended;
	isLoading: boolean;
	error: null | string;
	getProductInfo: (id: string) => void;
}

export const useProduct = create<ProductState>()(
	devtools(
		immer((set) => ({
			productInfo: {} as ProductExtended,
			isLoading: true,
			error: null,
			getProductInfo: (id) => {
				set({isLoading: true});

				apiProducts
					.getProduct(id)
					.then((product) => {
						set({productInfo: product});
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
