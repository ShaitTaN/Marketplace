import ky from 'ky';
import {UserInfoReq} from './types';

const api = ky.extend({prefixUrl: `${import.meta.env.VITE_API_URL}/bff/`});

export const apiAuth = {
	register: (userInfo: UserInfoReq): Promise<unknown> => {
		return api.post('register', {json: userInfo}).json();
	},
	token: (str: string): Promise<unknown> => {
		return api.post('token', {json: str}).json();
	},
	getNewAccessToken: (): Promise<unknown> => {
		return api.get('newaccesstoken').json();
	},
	logout: (): Promise<unknown> => {
		return api.get('logout').json();
	},
};
