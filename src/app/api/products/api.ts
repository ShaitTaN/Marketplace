import ky from 'ky';
import {ProductExtended} from '../../models/Types';

const api = ky.extend({prefixUrl: `${import.meta.env.VITE_API_URL}/api/v1/products/`});

export const apiProducts = {
	getProduct: (productId: string): Promise<ProductExtended> => {
		return api.get(productId).json();
	},
};
