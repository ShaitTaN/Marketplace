import {PublicationsState} from './usePublications';

export const selectPublications = (state: PublicationsState) => state.publications;

export const selectGetPublications = (state: PublicationsState) => state.getPublications;

export const selectIsLoading = (state: PublicationsState) => state.isLoading;
export const selectError = (state: PublicationsState) => state.error;
