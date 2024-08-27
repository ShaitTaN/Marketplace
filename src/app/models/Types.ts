export interface Comment {
	authorName: string;
	date: string;
	text: string;
	avaSrc?: string;
	pinned?: boolean;
	replies?: Comment[];
}

export interface BaseBrand {
	uuid: string;
	name: string;
	description: string;
	profilePicture: Picture;
}

export interface Brand extends BaseBrand {
	rating: number;
	subscribers: number;
	amountFeedback: number;
	amountPublications: number;
	bannerPicture: Picture;
}

export interface Publication {
	uuid: string;
	description: string;
	likes: Likes;
	amountComments: number;
	comments: PComment[];
	picturesList: Picture[];
}

export interface Likes {
	opaque: number;
	acquire: number;
	andIncrement: number;
	andDecrement: number;
	plain: number;
}

export interface PComment {
	uuid: string;
	createdDateTime: string;
	updatedDateTime: string;
	isActive: boolean;
	content: string;
	parent: string;
	client: Client;
}

export interface Client {
	uuid: string;
	firstName: string;
	lastName: string;
	profilePicture: Picture;
}

export interface Picture {
	uuid: string;
	filePath: string;
}

export interface ProductCategory {
	uuid: string;
	name: string;
	parent: string;
}

export interface Product {
	uuid: string;
	name: string;
	discount: number;
	rating: number;
	amountReviews: number;
	price: number;
	discountPrice: number;
	shop: Pick<BaseBrand, 'name' | 'uuid'>;
	picturesList: Picture[];
}

export interface ProductExtended extends Product {
	createdDateTime: string;
	updatedDateTime: string;
	isActive: boolean;
	article: string;
	description: string;
	count: number;
	shop: BaseBrand;
	category: ProductCategory;
}
