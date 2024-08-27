import {useState} from 'react';
import {PublishCard} from '../../../../components/PublishCard/components/PublishCard/PublishCard';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';
import {Publication} from '../../../../app/models/Publication';
import {PublicationModal} from '../PublicationModal/PublicationModal';

interface Props {
	shortenedItems?: boolean;
	publishesData?: Publication[];
	width?: string;
	imgHeight?: number;
}

export const PublicationItems = ({shortenedItems = false, publishesData, width, imgHeight}: Props) => {
	const [items] = useState<Publication[]>(
		publishesData || [
			{
				avaSrc: 'https://s8.hostingkartinok.com/uploads/images/2016/08/a131e3cfd554b650c83ab2f5327b8b27.jpg',
				imgSrc: 'https://s8.hostingkartinok.com/uploads/images/2016/08/a131e3cfd554b650c83ab2f5327b8b27.jpg',
				authorName: 'Агами Керамика',
				date: '7 дек в 20:00',
				likesCount: 321,
				commentsCount: 12,
				text: 'Симпатичные баночки в крапинку мы сделали специально для тех, кто не любит пестрые магазинные упаковки. Храните в них текст',
				imgSrcArray: [
					'https://s8.hostingkartinok.com/uploads/images/2016/08/a131e3cfd554b650c83ab2f5327b8b27.jpg',
					'https://s8.hostingkartinok.com/uploads/images/2016/08/a131e3cfd554b650c83ab2f5327b8b27.jpg',
					'https://s8.hostingkartinok.com/uploads/images/2016/08/a131e3cfd554b650c83ab2f5327b8b27.jpg',
				],
			},
			{
				avaSrc:
					'https://s3-alpha-sig.figma.com/img/a988/6e0d/c71b2b1a197da9b0aa60d62a744ca8eb?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qOH1L44T3UyPPsTbCwUwT1QEhBm-paBwYNNfLNCfPX--2YJS4AIJ0PA4WbRV6x5bD8B-XMWdc6oBVX9a6Nvqm8iGtYkaKlyhcrE0v873a7dKtMrOMhXt5T6aGCYCMZTVn9zPyLGge8rrykriL-dTWIEdoLNzvTfWYSj3bKTaYZW4svgmX3jFYwxlWdh4NCspVo49YUhpxZ03Ok9PjlagGW2N7QPos1mFz4mD6b0N5ttVBs-mu-8zVh81lh3CHDwQoHywoLAhkwyPz1CU2wbQmMqePSRheYcJYmJPSlaWGYPOx2uCZPMrm8w0vL4Asp7n-AEa1Kdd1boSsBRUANYlbA__',
				authorName: 'AVE.EVA',
				date: '5 дек в 13:56',
				likesCount: 135,
				commentsCount: 24,
				text: 'Махровый кардиган окутает вас теплотой :) ',
			},
			{
				avaSrc:
					'https://s3-alpha-sig.figma.com/img/6a52/943e/262a24074d2e1ebed0a2608c2ec571a0?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ppwshbKrcmGO7ulsDU2Kg4W2WQRmlI9npw0TuYZRGSC4J3~~oVtohQG8oz-Q8ikkK2N0jb6LNSJMP-I00sBKWb53IAGkDMljEvRCX7QeUuQ1HnO0nuJwCis1iy0EDUy5uiy1T-O6VFANnjGF2swIUipDde78cysvuRvmq6ulyfC~9RXdX0YqTs9Za66AFg4I0~22k6Nv3-iqBjAP-zeeBmmG949FhD~osmnj5uTGQF5r1JvalQY6JjSY8AHaH7ZUcjx4CGUOqYmgbvkzGQSyIG5uDUcEfpUxedQThp39rlQchvN-BwZ7e~vsDiYE0XlcV0KBgH4K0txU2TQJ6p5gvQ__',
				authorName: 'ASK by Guri',
				date: '6 дек в 09:34',
				likesCount: 145,
				commentsCount: 12,
				text: 'Джинсовая история. Продолжение.',
			},
			{
				avaSrc:
					'https://s3-alpha-sig.figma.com/img/1ab1/4a7e/2fc2a3b3825d5aa830fc3c018779af5d?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iXwzV3anz4FZDKHtJf1m4DrFfvqEp8x79E4H6o1utTBQbp9BRPzaX0cEKNex94rgpKTZILaou8oKUOAkrw5gdNdiyND3CzxVOY69EIU0K-gvrwnoUsp4g58KK1MMe1QaK~q~-LWwsOsO6tjvM0cC~HqiJm4bfMa6VVEzt5Mm-kWsw5ZsewRE2QEdU~vk7sNZ~f0d2GETGKa04tObcOvxmxq69INRkiOQ6F5yrjuk1Ydsn45X6rtfogGosFYYikb8ZMlxREFpB2Y0h1imzQfrhy0aaasNikz2I1qfor19~IhnEgygVgPZtcvoaBDhzKh2~zKBUYDWuCP~tR-plkZzAw__',
				authorName: 'Cerema Love',
				date: '9 дек в 14:31',
				likesCount: 941,
				commentsCount: 12,
				text: 'Горчичное воскресенье. Или любой другой день недели Эти малыши — бокалы для кофе — поднимут настроение и сделают фильтр ароматнее благодаря своей ',
			},
			{
				avaSrc:
					'https://s3-alpha-sig.figma.com/img/3144/c47b/ee2ff32c13be7312343f9605e8faa778?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j5EZ9PPdksbrcjzUTsA3LZjSIc~dJNSTd52bu7iOeTZNFSJgvBZLeYNEwWRIwmY3Ieit5YfxoEdYO0QKmfYnywLdRsxmCNK1lqr3DezBZfhJ6eCHsNxTr2kXDmsGZV47nt36RlvS1wSLNQ6~KRaeSACzZ8FtW-eXgm6QNv13J9BI1dw7-e-PiS0EOvCWyCX0qworLmqzg9R7doWfBVbwPDlFWjpCQxQXwC3d9S4q8IXzTzgojVHCgwmMeYej-9sMat514jr92f8KVKUx-SP5ZyWYUm5ncSEMkQSPESEMfhNXytPgI3q~ok0PI7-jLCBx5pTJBy24Vv1edw9dp-vHUQ__',
				authorName: 'The story of flowers',
				date: '7 дек в 20:45',
				likesCount: 663,
				commentsCount: 16,
				text: 'Кулоны с озотамнусом —  наши неповторимые изделия из ювелирной смолы и настоящих цветов сухоцветов, сочетающие в себе хрупкость и нежность. Наверн,',
			},
			{
				avaSrc:
					'https://s3-alpha-sig.figma.com/img/a804/cea6/16b967d8fad6f8b4958a54d543f6f7b2?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ie1kI0g-IxbRW77nS84nWcmzz9D9s-cFJyAA5nBeMirlwkI0Ob7sbqai-FPO7UR8JZePfeJfWa2WdR0BvoJDinFShRIDXHR4Z3DocLaq~FlI-wtVAwkwErnUXRSEdCxkfKGQ8MGxJMVJgFcT3kOzyXUftPP45UdCLprLeQJkVsnMrTxhjWoVyLJSAlN-q4WUK1Oe83emQIscsF6htfLC7t22TBEebaeuZcRhL0QUHs8j9KDjpOL~~VDd2odNmr5qyIBWI4mNGKaGXoI8MVL~9B-XfOm2tF5nkdu60XhPiao4zX4NrPEwn0qdFitpmEMDEwzFw6BOJNndpCZoaNEudw__',
				authorName: 'M&G all natural',
				date: '3 дек в 13:54',
				likesCount: 421,
				commentsCount: 75,
				text: 'Весь наш ассортимент изготовлен только из натуральных тканей! А ещё, каждое изделие проходит через руки наших опытных и талан',
			},
			{
				avaSrc:
					'https://s3-alpha-sig.figma.com/img/a804/cea6/16b967d8fad6f8b4958a54d543f6f7b2?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ie1kI0g-IxbRW77nS84nWcmzz9D9s-cFJyAA5nBeMirlwkI0Ob7sbqai-FPO7UR8JZePfeJfWa2WdR0BvoJDinFShRIDXHR4Z3DocLaq~FlI-wtVAwkwErnUXRSEdCxkfKGQ8MGxJMVJgFcT3kOzyXUftPP45UdCLprLeQJkVsnMrTxhjWoVyLJSAlN-q4WUK1Oe83emQIscsF6htfLC7t22TBEebaeuZcRhL0QUHs8j9KDjpOL~~VDd2odNmr5qyIBWI4mNGKaGXoI8MVL~9B-XfOm2tF5nkdu60XhPiao4zX4NrPEwn0qdFitpmEMDEwzFw6BOJNndpCZoaNEudw__',
				authorName: 'M&G all natural',
				date: '7 дек в 20:00',
				likesCount: 321,
				commentsCount: 12,
				text: 'Костюм из футера с начесом в цвете шалфей 🌿 ',
			},
			{
				avaSrc:
					'https://s3-alpha-sig.figma.com/img/ff23/4df3/c50b0ac9077beb50054219e02675997f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eKi525C5lbAvw1WpAswBaLpnYFISjr9XEUYTOKm85hwPZS3rnkTPNjCDMemBarVivKOV5wD5nakg1DT7Z5Yo-kXJx2IxwyeJ7y34rpkpoOpTAJg9CyEDvfuY2-wbKRxEX5EfJQBPWUAsPzYrIAtovuiUpbiqzUFT8~I7k58b2q27uyryB8ONzLa2cGORAQ33E4q7nhhAEROlWZGHBgL7kaDf3xFEFAmaXFdO4zurNUuZcKx76UWgOo6cBBkD9jbUenRqQ1DZ-sCq1PxUgEqeRY2OyCtemhIAkNWO44D35O5Li8Dk8Gvno010ZtW-f2gEJkDPWutXUCeqQBJ9Besvbg__',
				authorName: 'KLEVER Hand Made',
				date: '3 дек в 11:07',
				likesCount: 1684,
				commentsCount: 241,
				text: 'Я человек простой. Вижу пряжу с красивым градиентом - вяжу кардиган :)',
			},
			{
				avaSrc:
					'https://s3-alpha-sig.figma.com/img/e1ab/49a9/c6c289b27623498966bf217f65f8fcf4?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mcfI22l-AJCcR~QFy1FL4VJXybrNa6alglbZFVwEJiJPtiCKY8lotNyrvCXfEvK012IAScQnendyRv9~gZONuOB7qDCJFRxOZj~qEmKwgT44sHbJQhO5QVgYHvPc1e-KlIrWNajl-lV9SsZdSceB10jmW5HOOIjdJFbPSbJeEBkf~wXZNRx-rUE-NV9MSrFUpmCBT93JMGALFye~SIQ2lMMCzmUXQAFoOr~2JEYUVWlor5KUmHevGojoal7EwVgaTMPbW~Is2ZRpn9UYPQMtsv4cDIWGWqzljG4gAyhElU8X7YBDFdaXBIV0iE~QlvZODafeKNuDuJvG25FozVUuvw__',
				authorName: 'CHAFIZEN',
				date: '1 дек в 20:00',
				likesCount: 131,
				commentsCount: 41,
				text: 'ДНК бренда CHAFIZÉN — это любовьк красоте, яркие акцентные цветаи неординарность во всем 🤍',
			},
		]
	);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);

	const onClickNext = () => {
		if (activeIndex === items.length - 1) return;

		setActiveIndex(activeIndex + 1);
	};

	const onClickPrev = () => {
		if (activeIndex === 0) return;

		setActiveIndex(activeIndex - 1);
	};

	const onOpenPublication = (index: number) => {
		setActiveIndex(index);
		setIsModalOpen(true);
	};

	return (
		<>
			{items.map((item, index) => (
				<PublishCard
					key={index}
					rows={4}
					shortened={shortenedItems}
					title={item.authorName}
					description={item.date}
					avaSrc={item.avaSrc}
					imgSrc={item.imgSrc}
					cardText={item.text}
					likesCount={item.likesCount}
					commentsCount={item.commentsCount}
					onOpenPublication={() => onOpenPublication(index)}
					width={width}
					imgHeight={imgHeight}
					hasAddToArchive
					btnRedirectToProduct={
						<ButtonBase buttonType='secondary' buttonSize='normal' onClick={(e) => e.stopPropagation()}>
							К изделию
						</ButtonBase>
					}
				/>
			))}
			<PublicationModal
				item={items[activeIndex]}
				open={isModalOpen}
				onCancel={() => setIsModalOpen(false)}
				onClickNext={onClickNext}
				onClickPrev={onClickPrev}
			/>
		</>
	);
};
