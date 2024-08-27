import ky from 'ky';
import {Brand, Product, Publication} from '../../models/Types';
import getShopResponse from './mock/getShopResponse.json';
import getShopPublicationsResponse from './mock/getShopPublicationsResponse.json';
import getShopProductsResponse from './mock/getShopProductsResponse.json';

const api = ky.extend({prefixUrl: `${import.meta.env.VITE_API_URL}/api/v1/shops/`});

export const apiShops = {
	getShop: (shopId: string): Promise<Brand> => {
		if (import.meta.env.VITE_SHOPS_STUB_ENABLED === 'true') {
			return Promise.resolve(getShopResponse);
		}

		return api.get(shopId).json();
	},
	getShopPublications: (shopId: string): Promise<Publication[]> => {
		if (import.meta.env.VITE_SHOPS_STUB_ENABLED === 'true') {
			return Promise.resolve(getShopPublicationsResponse);
		}

		return api.get(`${shopId}/publications`).json();
	},
	getShopProducts: (shopId: string): Promise<Product[]> => {
		if (import.meta.env.VITE_SHOPS_STUB_ENABLED === 'true') {
			return Promise.resolve(getShopProductsResponse);
		}

		return api.get(`${shopId}/products`).json();
	},
};
