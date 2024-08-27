export interface Delivery {
	title: string;
	id: string;
	date: string;
	status: string;
	delivery: string;
	paid: string | null;
	products: string[];
	trackingId?: string;
}
