import {ProductState} from './useProduct';

export const selectProductInfo = (state: ProductState) => state.productInfo;

export const selectGetProductInfo = (state: ProductState) => state.getProductInfo;

export const selectIsLoading = (state: ProductState) => state.isLoading;
export const selectError = (state: ProductState) => state.error;
