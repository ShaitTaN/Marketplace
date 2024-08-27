import {LayoutWithContent} from './LayoutWithContent';
import {LayoutWithoutContent} from './LayoutWithoutContent';

const cardsData: {
	title: string;
	img: string;
}[] = [
	{
		img: 'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
		title: 'Костюм васильковый с брюками и рубашкой в клеточку васильковый',
	},
	{
		img: 'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
		title: 'Костюм васильковый с брюками и рубашкой в клеточку васильковый',
	},
	{
		img: 'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
		title: 'Костюм васильковый с брюками и рубашкой в клеточку васильковый',
	},
	{
		img: 'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
		title: 'Костюм васильковый с брюками и рубашкой в клеточку васильковый',
	},
	{
		img: 'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
		title: 'Костюм васильковый с брюками и рубашкой в клеточку васильковый',
	},
	{
		img: 'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
		title: 'Костюм васильковый с брюками и рубашкой в клеточку васильковый',
	},
	{
		img: 'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
		title: 'Костюм васильковый с брюками и рубашкой в клеточку васильковый',
	},
	{
		img: 'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
		title: 'Костюм васильковый с брюками и рубашкой в клеточку васильковый',
	},
	{
		img: 'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
		title: 'Костюм васильковый с брюками и рубашкой в клеточку васильковый',
	},
	{
		img: 'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
		title: 'Костюм васильковый с брюками и рубашкой в клеточку васильковый',
	},
];

export const AwaitingReviewsTabPanel = () => {
	return <div>{cardsData.length > 0 ? <LayoutWithContent cardsData={cardsData} /> : <LayoutWithoutContent />}</div>;
};
