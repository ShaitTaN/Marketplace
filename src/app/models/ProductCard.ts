export type statuses = 'new' | 'exclusive' | 'discount' | 'outOfStock';

export interface Product {
	title: string;
	price: string | number;
	brand: string;
	image?: string;
	statuses?: statuses[];
	oldPrice?: string;
	discount?: number;
	rating?: string;
	commentsCount?: number;
}
