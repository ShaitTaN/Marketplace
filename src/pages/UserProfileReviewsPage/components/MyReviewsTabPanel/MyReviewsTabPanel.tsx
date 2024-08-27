import {Comment} from '../../../../app/models/Types';
import {LayoutWithContent} from './LayoutWithContent';
import {LayoutWithoutContent} from './LayoutWithoutContent';

const myReviewBlockData: {
	title: string;
	rate: number;
	date: string;
	description: string;
	imgs: string[];
	productImg: string;
	replies?: Comment[];
}[] = [
	{
		title: 'Костюм васильковый с брюками и рубашкой в клеточку васильковый',
		rate: 5,
		date: '7 дек в 20:00',
		description:
			'Очень мягкая ткань! Нереально приятный материал, сразу видно, что сделано из натурального льна, обязательно буду ещё у этого продавца заказывать другие комплекты к лету',
		imgs: [
			'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
			'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
			'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
			'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
			'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
			'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
		],
		productImg:
			'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
		replies: [
			{
				authorName: 'Александра',
				avaSrc:
					'https://s3-alpha-sig.figma.com/img/a516/ac2b/e43470bb34888c7d818714c4ae5583e9?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l8atdv5CUV2niXXgj1x8r5AlLzLCrOdJgyk6-ej00VA8xQG8IZ2gKZ6DMTWbJWWVUzW7e2aXIBJ6mk9Mn9LrKIXHuUp-VLg61XrsoMrkXIIu~St8OIVAeHJYigHNMLRd~ftZkHSZwPmqNLiLTX4HnAjBrlI03dvJg4TsUsqsATx8V5WPoMXc0V72A6kNHfSB7V2yNSmuGr6gzUb-4GOP3Hb-YWCqPqq9j3sMJ5yFFPPtr6nXIXiP34M2l7P-bxs5O3pFAsVsJzY19cpzr9i5xsEPFm3wUaaiySTsy2xuxE~YUxaVq1Nf2L1irzAF~rnt~e5FIWgp7hDHCrDnDoOdAg__',
				date: '1 дек в 23:32',
				text: 'Вам очень идёт! ',
			},
		],
	},
	{
		title: 'Костюм васильковый с брюками и рубашкой в клеточку васильковый',
		rate: 5,
		date: '7 дек в 20:00',
		description:
			'Очень мягкая ткань! Нереально приятный материал, сразу видно, что сделано из натурального льна, обязательно буду ещё у этого продавца заказывать другие комплекты к лету',
		imgs: [
			'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
			'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
			'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
		],
		productImg:
			'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
	},
	{
		title: 'Костюм васильковый с брюками и рубашкой в клеточку васильковый',
		rate: 5,
		date: '7 дек в 20:00',
		description:
			'Очень мягкая ткань! Нереально приятный материал, сразу видно, что сделано из натурального льна, обязательно буду ещё у этого продавца заказывать другие комплекты к лету',
		imgs: [
			'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
			'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
			'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
		],
		productImg:
			'https://cdn.dribbble.com/users/2358/screenshots/10362749/media/7f7d1b6e6b0b0a7d9f9a6e6b2b2c7f1c.png?compress=1&resize=400x300&vertical=top',
	},
];

export const MyReviewsTabPanel = () => {
	return (
		<div>
			{myReviewBlockData.length > 0 ? (
				<LayoutWithContent myReviewBlockData={myReviewBlockData} />
			) : (
				<LayoutWithoutContent />
			)}
		</div>
	);
};
