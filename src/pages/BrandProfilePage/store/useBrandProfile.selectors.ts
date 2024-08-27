import {BrandProfileState} from './useBrandProfile';

export const selectBrandInfo = (state: BrandProfileState) => state.brandInfo;

export const selectGetBrandInfo = (state: BrandProfileState) => state.getBrandInfo;

export const selectIsLoading = (state: BrandProfileState) => state.isLoading;
export const selectError = (state: BrandProfileState) => state.error;
