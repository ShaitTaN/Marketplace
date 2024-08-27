import {Flex, Typography} from 'antd';
import HelpIcon from '../../assets/icons/help.svg';
import AddToArchiveActive from '../../assets/icons/addToArchiveActive.svg';
import AddToArchive from '../../assets/icons/addToArchive.svg';
import classes from './styles.module.scss';
import {Popover} from '../../ui/Popover/Popover';
import {LayoutWithContent} from './components/LayoutWithContent';
import {LayoutWithoutContent} from './components/LayoutWithoutContent';
import clsx from 'clsx';
import {Publication} from '../../app/models/Publication';

const publishesData: Publication[] = [
	{
		avaSrc:
			'https://s3-alpha-sig.figma.com/img/dcc6/2265/a8d0582c2caa303abb3b377ae16f599b?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hx7wcsIma~EA0ImCQZ8mGGW7BklkJ-Wof6JClirrjE4gw2GSyqLDwuC6UeRXQ2gbjHfxv4wi2YGhkjQGoSSusTf~tTo2jUUQn0L9Q~9stcNjjC64Lj4~L5tjvfzSWTvHmLXKUhOhYKrF3FG1-Yi2U4VjdWwHkRxJgVZdE1PObKuBkvlb34ILP4TVzb~fEouv9VYUSeo868n6XionN53DyOH8G0Av3V7NsPg8jO1sUJDY-oME8cz49MHn6q7t4KgwT7iKKge7-BJ4ZvDkSdjIf9ExUrzLUA8vLSNFWko5InAgG6dpx8jI4odn1DA24gF32XpUz4w3-nrYO3lBf1RJuQ__',
		authorName: 'Агами Керамика',
		date: '7 дек в 20:00',
		likesCount: 321,
		commentsCount: 12,
		text: 'Симпатичные баночки в крапинку мы сделали специально для тех, кто не любит пестрые магазинные упаковки. Храните в них текст',
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
			'https://s3-alpha-sig.figma.com/img/6a52/943e/262a24074d2e1ebed0a2608c2ec571a0?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ppwshbKrcmGO7ulsDU2Kg4W2WQRmlI9npw0TuYZRGSC4J3~~oVtohQG8oz-Q8ikkK2N0jb6LNSJMP-I00sBKWb53IAGkDMljEvRCX7QeUuQ1HnO0nuJwCis1iy0EDUy5uiy1T-O6VFANnjGF2swIUipDde78cysvuRvmq6ulyfC~9RXdX0YqTs9Za66AFg4I0~22k6Nv3-iqBjAP-zeeBmmG949FhD~osmnj5uTGQF5r1JvalQY6JjSY8AHaH7ZUcjx4CGUOqYmgbvkzGQSyIG5uDUcEfpUxedQThp39rlQchvN-BwZ7e~vsDiYE0XlcV0KBgH4K0txU2TQJ6p5gvQ__',
		authorName: 'ASK by Guri',
		date: '6 дек в 09:34',
		likesCount: 145,
		commentsCount: 12,
		text: 'Джинсовая история. Продолжение.',
	},
];

export const UserProfileSavedPublishsPage = () => {
	return (
		<Flex vertical gap={publishesData.length > 0 ? 12 : 0} className={classes.userProfileSavedPublishsPageWrapper}>
			<Flex
				gap={8}
				align='center'
				className={clsx({[classes.titlePage]: true}, {[classes.titleWhenNoPublishes]: publishesData.length === 0})}
			>
				<Typography.Text>Сохранённые публикации</Typography.Text>
				<Popover
					placement='rightTop'
					withoutBorder
					overlayClassName={classes.helpPopover}
					content={
						<Flex vertical gap={8}>
							<Flex vertical gap={4} align='center' className={classes.helpText}>
								<span>
									Чтобы <strong>удалить</strong> публикацию из закладок, нажмите на иконку:
								</span>
								<AddToArchiveActive />
							</Flex>
							<Flex vertical gap={4} align='center' className={classes.helpText}>
								<span>
									Чтобы <strong>вернуть</strong> публикацию, нажмите ещё раз на иконку:
								</span>
								<AddToArchive />
							</Flex>
						</Flex>
					}
					trigger={'hover'}
				>
					<HelpIcon style={{cursor: 'pointer'}} />
				</Popover>
			</Flex>
			{publishesData.length > 0 ? <LayoutWithContent publishesData={publishesData} /> : <LayoutWithoutContent />}
		</Flex>
	);
};
