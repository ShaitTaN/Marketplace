export interface MenuItem {
	title: string;
	category: string;
	icon?: JSX.Element;
	children?: MenuItem[];
}
