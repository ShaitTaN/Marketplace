import {Drawer, Flex} from 'antd';
import classes from './styles.module.scss';
import {CatalogMenuItem} from '../CatalogMenuItem/CatalogMenuItem';
import {MenuItem} from '../../types';
import {useEffect, useState} from 'react';
import clsx from 'clsx';

interface Props {
	open: boolean;
	menuItems: MenuItem[];
	closeModal: () => void;
}

export const CatalogMenuModal = ({open, closeModal, menuItems}: Props) => {
	const [currentMenu, setCurrentMenu] = useState<MenuItem[][]>([menuItems]);
	const [activeCategories, setActiveCategories] = useState<string[]>([]);
	const [scrollY, setScrollY] = useState(window.scrollY);

	const onMouseEnterItem = (item: MenuItem, index: number) => {
		setActiveCategories((prev) => {
			if (!item.children) {
				return prev.slice(0, index);
			}

			const newCategories = prev.slice(0, index + 1);
			newCategories[index] = `${item.title}-${index}`;
			return newCategories;
		});

		if (!item.children) {
			setCurrentMenu((prev) => prev.slice(0, index + 1));
			return;
		}

		setCurrentMenu((prev) => [...prev.slice(0, index + 1), item.children!]);
	};
	
	const onClose = () => {
		setCurrentMenu([menuItems]);
		setActiveCategories([]);
		closeModal();
	};

	const onClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
		if (
			(e.target as Element).className === 'ant-drawer-body' ||
			(e.target as Element).className === classes.container
		) {
			onClose();
		}
	};

	useEffect(() => {
		const onScroll = () => {
			const scroll = window.scrollY;
			setScrollY(scroll);
		};

		document.addEventListener('scroll', onScroll);

		return () => {
			document.removeEventListener('scroll', onScroll);
		};
	}, []);

	const topPosition = scrollY > 20 ? '64px' : 92 - scrollY + 'px';

	return (
		<Drawer
			placement='top'
			closable={false}
			onClose={onClose}
			open={open}
			getContainer={false}
			height={'auto'}
			className={classes.drawer}
			style={{top: topPosition}}
			onClick={onClickOutside}
			zIndex={50}
		>
			<nav className={classes.container} role='navigation'>
				<Flex
					className={clsx({[classes.menu]: true, [classes.oneBox]: currentMenu.length === 1})}
				>
					{currentMenu.map((menu, index) => (
						<Flex vertical className={classes.box} gap={'4px'} key={index}>
							{menu.map((item, i) => (
								<div onMouseEnter={() => onMouseEnterItem(item, index)} key={`${item.title}-${index}-${i}`}>
									<CatalogMenuItem
										title={item.title}
										icon={item.icon}
										hasChildren={!!item.children}
										active={activeCategories.includes(`${item.title}-${index}`)}
									/>
								</div>
							))}
						</Flex>
					))}
				</Flex>
			</nav>
		</Drawer>
	);
};
