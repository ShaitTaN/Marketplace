import {ProductsState} from './useProducts';

export const selectProducts = (state: ProductsState) => state.products;

export const selectGetProducts = (state: ProductsState) => state.getProducts;

export const selectIsLoading = (state: ProductsState) => state.isLoading;
export const selectError = (state: ProductsState) => state.error;
