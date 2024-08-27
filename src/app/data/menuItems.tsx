import FemaleIcon from '../../assets/icons/female.svg';
import MaleIcon from '../../assets/icons/male.svg';
import KidIcon from '../../assets/icons/kid.svg';
import ShoesIcon from '../../assets/icons/shoes.svg';
import BagIcon from '../../assets/icons/bag.svg';
import RingIcon from '../../assets/icons/ring.svg';
import PlantIcon from '../../assets/icons/plant.svg';
import BrushIcon from '../../assets/icons/brush.svg';
import PaletteIcon from '../../assets/icons/palette.svg';
import DiskIcon from '../../assets/icons/disk.svg';
import GiftIcon from '../../assets/icons/gift.svg';
import HouseIcon from '../../assets/icons/house.svg';
import {MenuItem} from '../../components/CatalogMenu/types';

export const menuItems: MenuItem[] = [
	{
		title: 'Женщинам',
		category: 'forWomen',
		icon: <FemaleIcon />,
		children: [
			{
				title: 'Блузы и рубашки',
				category: '-',
			},
			{
				title: 'Брюки, бриджи и капри',
				category: '-',
			},
			{
				title: 'Верхняя одежда',
				category: '-',
			},
			{
				title: 'Джемперы, водолазки',
				category: '-',
			},
			{
				title: 'Домашняя одежда',
				category: '-',
			},
			{
				title: 'Комбинезоны',
				category: '-',
			},
			{
				title: 'Костюмы',
				category: '-',
			},
			{
				title: 'Купальники',
				category: '-',
			},
			{
				title: 'Лонгсливы',
				category: '-',
			},
			{
				title: 'Нижнее бельё',
				category: '-',
			},
			{
				title: 'Одежда для беременных',
				category: '-',
			},
			{
				title: 'Пиджаки, жилеты, жакеты',
				category: '-',
			},
			{
				title: 'Платья и сарафаны',
				category: '-',
			},
			{
				title: 'Религиозная одежда',
				category: '-',
			},
			{
				title: 'Свитеры, кардиганы',
				category: '-',
			},
			{
				title: 'Спортивная одежда',
				category: '-',
			},
			{
				title: 'Толстовки свитшоты и худи',
				category: '-',
			},
			{
				title: 'Туники',
				category: '-',
			},
			{
				title: 'Футболки и топы',
				category: '-',
			},
			{
				title: 'Чулки и носки',
				category: '-',
			},
			{
				title: 'Шорты',
				category: '-',
			},
			{
				title: 'Юбки',
				category: '-',
			},
			{
				title: 'Plus size',
				category: '-',
			},
		],
	},
	{
		title: 'Мужчинам',
		category: 'forMen',
		icon: <MaleIcon />,
		children: [
			{
				title: 'Брюки',
				category: '-',
			},
			{
				title: 'Верхняя одежда',
				category: '-',
			},
			{
				title: 'Джемперы и водолазки',
				category: '-',
			},
			{
				title: 'Джинсы',
				category: '-',
			},
			{
				title: 'Комбинезоны',
				category: '-',
			},
			{
				title: 'Костюмы',
				category: '-',
			},
			{
				title: 'Лонгсливы',
				category: '-',
			},
			{
				title: 'Нижнее бельё',
				category: '-',
			},
			{
				title: 'Носки',
				category: '-',
			},
			{
				title: 'Пиджаки, жилеты и жакеты',
				category: '-',
			},
			{
				title: 'Пижамы',
				category: '-',
			},
			{
				title: 'Пляжная одежда',
				category: '-',
			},
			{
				title: 'Религиозная одежда',
				category: '-',
			},
			{
				title: 'Рубашки',
				category: '-',
			},
			{
				title: 'Свитеры и кардиганы',
				category: '-',
			},
			{
				title: 'Спортивная одежда',
				category: '-',
			},
			{
				title: 'Толстовки, свитшоты и худи',
				category: '-',
			},
			{
				title: 'Футболки и майки',
				category: '-',
			},
			{
				title: 'Шорты',
				category: '-',
			},
			{
				title: 'Plus size',
				category: '-',
			},
		],
	},
	{
		title: 'Детям',
		category: 'forChildren',
		icon: <KidIcon />,
		children: [
			{
				title: 'Декор для детской',
				category: '-',
			},
			{
				title: 'Для девочек',
				category: '-',
				children: [
					{
						title: 'Белье',
						category: '-',
					},
					{
						title: 'Блузки и рубашки',
						category: '-',
					},
					{
						title: 'Брюки и шорты',
						category: '-',
					},
					{
						title: 'Верхняя одежда',
						category: '-',
					},
					{
						title: 'Водолазки',
						category: '-',
					},
					{
						title: 'Джемперы и кардиганы',
						category: '-',
					},
					{
						title: 'Джинсы и джеггинсы',
						category: '-',
					},
					{
						title: 'Жилеты',
						category: '-',
					},
					{
						title: 'Карнавальные костюмы',
						category: '-',
					},
					{
						title: 'Комбинезоны и полукомбинезоны',
						category: '-',
					},
					{
						title: 'Костюмы',
						category: '-',
					},
					{
						title: 'Купальные костюмы',
						category: '-',
					},
					{
						title: 'Лонгсливы',
						category: '-',
					},
					{
						title: 'Обувь',
						category: '-',
					},
					{
						title: 'Одежда для дома',
						category: '-',
					},
					{
						title: 'Пиджаки и жакеты',
						category: '-',
					},
					{
						title: 'Пижамы и сорочки',
						category: '-',
					},
					{
						title: 'Платья и сарафаны',
						category: '-',
					},
					{
						title: 'Свитшоты',
						category: '-',
					},
					{
						title: 'Толстовки',
						category: '-',
					},
					{
						title: 'Туники',
						category: '-',
					},
					{
						title: 'Фартуки',
						category: '-',
					},
					{
						title: 'Футболки и топы',
						category: '-',
					},
					{
						title: 'Халаты',
						category: '-',
					},
					{
						title: 'Худи',
						category: '-',
					},
					{
						title: 'Юбки',
						category: '-',
					},
				],
			},
			{
				title: 'Для мальчиков',
				category: '-',
				children: [
					{
						title: 'Белье',
						category: '-',
					},
					{
						title: 'Брюки и шорты',
						category: '-',
					},
					{
						title: 'Верхняя одежда',
						category: '-',
					},
					{
						title: 'Водолазки',
						category: '-',
					},
					{
						title: 'Джемперы и кардиганы',
						category: '-',
					},
					{
						title: 'Джинсы',
						category: '-',
					},
					{
						title: 'Жилеты',
						category: '-',
					},
					{
						title: 'Карнавальные костюмы',
						category: '-',
					},
					{
						title: 'Комбинезоны и полукомбинезоны',
						category: '-',
					},
					{
						title: 'Костюмы',
						category: '-',
					},
					{
						title: 'Лонгсливы',
						category: '-',
					},
					{
						title: 'Обувь',
						category: '-',
					},
					{
						title: 'Одежда для дома',
						category: '-',
					},
					{
						title: 'Пиджаки и жакеты',
						category: '-',
					},
					{
						title: 'Плавки и бордшорты',
						category: '-',
					},
					{
						title: 'Рубашки',
						category: '-',
					},
					{
						title: 'Свитшоты',
						category: '-',
					},
					{
						title: 'Толстовки',
						category: '-',
					},
					{
						title: 'Фартуки',
						category: '-',
					},
					{
						title: 'Футболки и майки',
						category: '-',
					},
					{
						title: 'Худи',
						category: '-',
					},
				],
			},
			{
				title: 'Для новорожденных',
				category: '-',
				children: [
					{
						title: 'Аксессуары',
						category: '-',
					},
					{
						title: 'Белье',
						category: '-',
					},
					{
						title: 'Боди и ползунки',
						category: '-',
					},
					{
						title: 'Брюки и шорты',
						category: '-',
					},
					{
						title: 'Верхняя одежда',
						category: '-',
					},
					{
						title: 'Жакеты и болеро',
						category: '-',
					},
					{
						title: 'Комбинезоны и полукомбинезоны',
						category: '-',
					},
					{
						title: 'Конверты и спальные мешки',
						category: '-',
					},
					{
						title: 'Костюмы и комплекты',
						category: '-',
					},
					{
						title: 'Кофточки и джемперы',
						category: '-',
					},
					{
						title: 'Одежда для дома',
						category: '-',
					},
					{
						title: 'Одежда для крещения',
						category: '-',
					},
					{
						title: 'Одежда на выписку',
						category: '-',
					},
					{
						title: 'Пинетки',
						category: '-',
					},
					{
						title: 'Платья и юбки',
						category: '-',
					},
					{
						title: 'Распашонки',
						category: '-',
					},
					{
						title: 'Футболки и топы',
						category: '-',
					},
					{
						title: 'Халаты и пижамы',
						category: '-',
					},
				],
			},
			{
				title: 'Игрушки',
				category: '-',
				children: [
					{
						title: 'Домики и палатки',
						category: '-',
					},
					{
						title: 'Игрушки для детей до 3 лет',
						category: '-',
					},
					{
						title: 'Конструкторы',
						category: '-',
					},
					{
						title: 'Куклы и фигурки',
						category: '-',
					},
					{
						title: 'Машины и качалки',
						category: '-',
					},
					{
						title: 'Миниатюрные игрушки',
						category: '-',
					},
					{
						title: 'Мягкие игрушки',
						category: '-',
					},
					{
						title: 'Развивающие игрушки от 3 лет',
						category: '-',
					},
				],
			},
			{
				title: 'Мебель для детской',
				category: '-',
				children: [
					{
						title: 'Книжные шкафы и полки',
						category: '-',
					},
					{
						title: 'Кресла и пуфики',
						category: '-',
					},
					{
						title: 'Кроватки для малышей',
						category: '-',
					},
					{
						title: 'Столы',
						category: '-',
					},
					{
						title: 'Стулья',
						category: '-',
					},
				],
			},
			{
				title: 'Посуда для детей',
				category: '-',
			},
			{
				title: 'Текстиль для детской',
				category: '-',
				children: [
					{
						title: 'Бортики в кроватку',
						category: '-',
					},
					{
						title: 'Коврики',
						category: '-',
					},
					{
						title: 'Коконы для младенцев',
						category: '-',
					},
					{
						title: 'Одеяла',
						category: '-',
					},
					{
						title: 'Пледы, покрывала',
						category: '-',
					},
					{
						title: 'Подушки',
						category: '-',
					},
					{
						title: 'Постельное бельё',
						category: '-',
					},
					{
						title: 'Спальные мешки',
						category: '-',
					},
				],
			},
			{
				title: 'Хранение игрушек',
				category: '-',
			},
		],
	},
	{
		title: 'Обувь',
		category: 'shoes',
		icon: <ShoesIcon />,
		children: [
			{
				title: 'Детская',
				category: '-',
				children: [
					{
						title: 'Для девочек',
						category: '-',
					},
					{
						title: 'Для мальчиков',
						category: '-',
					},
					{
						title: 'Для новорожденных',
						category: '-',
					},
				],
			},
			{
				title: 'Женская',
				category: '-',
				children: [
					{
						title: 'Ботинки и сапоги',
						category: '-',
					},
					{
						title: 'Домашняя обувь и тапочки',
						category: '-',
					},
					{
						title: 'Кроссовки и кеды',
						category: '-',
					},
					{
						title: 'Лоферы',
						category: '-',
					},
					{
						title: 'Туфли и босоножки',
						category: '-',
					},
				],
			},
			{
				title: 'Мужская',
				category: '-',
				children: [
					{
						title: 'Ботинки и сапоги',
						category: '-',
					},
					{
						title: 'Домашняя обувь и тапочки',
						category: '-',
					},
					{
						title: 'Кеды и кроссовки',
						category: '-',
					},
					{
						title: 'Туфли и лоферы',
						category: '-',
					},
				],
			},
		],
	},
	{
		title: 'Аксессуары',
		category: 'accessories',
		icon: <BagIcon />,
		children: [
			{
				title: 'Аксессуары для волос',
				category: '-',
				children: [
					{
						title: 'Заколки, шпильки, гребни',
						category: '-',
					},
					{
						title: 'Ободки, венки, повязки',
						category: '-',
					},
					{
						title: 'Резинки',
						category: '-',
					},
				],
			},
			{
				title: 'Аксессуары для курения',
				category: '-',
			},
			{
				title: 'Аксессуары для электроники',
				category: '-',
				children: [
					{
						title: 'Аудио-аксессуары',
						category: '-',
					},
					{
						title: 'Для камер',
						category: '-',
					},
					{
						title: 'Для ноутбуков и планшетов',
						category: '-',
					},
					{
						title: 'Для телефонов',
						category: '-',
					},
				],
			},
			{
				title: 'Брелоки и ключницы',
				category: '-',
				children: [
					{
						title: 'Брелоки',
						category: '-',
					},
					{
						title: 'Ключницы',
						category: '-',
					},
				],
			},
			{
				title: 'Галстуки и запонки',
				category: '-',
				children: [
					{
						title: 'Галстуки, бабочки',
						category: '-',
					},
					{
						title: 'Запонки, зажимы',
						category: '-',
					},
				],
			},
			{
				title: 'Головные уборы',
				category: '-',
				children: [
					{
						title: 'Береты',
						category: '-',
					},
					{
						title: 'Капюшоны, капоры',
						category: '-',
					},
					{
						title: 'Кепки, бейсболки',
						category: '-',
					},
					{
						title: 'Косынки , платки',
						category: '-',
					},
					{
						title: 'Панамы',
						category: '-',
					},
					{
						title: 'Повязки',
						category: '-',
					},
					{
						title: 'Шапки',
						category: '-',
					},
					{
						title: 'Шляпы',
						category: '-',
					},
				],
			},
			{
				title: 'Зонты',
				category: '-',
			},
			{
				title: 'Наручные часы',
				category: '-',
			},
			{
				title: 'Нашивки и значки',
				category: '-',
				children: [
					{
						title: 'Значки',
						category: '-',
					},
					{
						title: 'Нашивки',
						category: '-',
					},
				],
			},
			{
				title: 'Носочные изделия',
				category: '-',
				children: [
					{
						title: 'Гетры',
						category: '-',
					},
					{
						title: 'Колготки',
						category: '-',
					},
					{
						title: 'Носки',
						category: '-',
					},
				],
			},
			{
				title: 'Очки',
				category: '-',
				children: [
					{
						title: 'Оправы для очков',
						category: '-',
					},
					{
						title: 'Солнцезащитные очки',
						category: '-',
					},
					{
						title: 'Очечники',
						category: '-',
					},
					{
						title: 'Холдеры и аксессуары для очков',
						category: '-',
					},
				],
			},
			{
				title: 'Перчатки и варежки',
				category: '-',
				children: [
					{
						title: 'Варежки и муфты',
						category: '-',
					},
					{
						title: 'Перчатки',
						category: '-',
					},
				],
			},
			{
				title: 'Ремни',
				category: '-',
			},
			{
				title: 'Сумки, рюкзаки и кошельки',
				category: '-',
				children: [
					{
						title: 'Багаж',
						category: '-',
					},
					{
						title: 'Бумажники, кошельки',
						category: '-',
					},
					{
						title: 'Визитницы, кардхолдеры',
						category: '-',
					},
					{
						title: 'Косметички',
						category: '-',
					},
					{
						title: 'Обложки, документницы',
						category: '-',
					},
					{
						title: 'Рюкзаки',
						category: '-',
					},
					{
						title: 'Сумки',
						category: '-',
						children: [
							{
								title: 'Клатчи и вечерние сумки',
								category: '-',
							},
							{
								title: 'Пляжные сумки',
								category: '-',
							},
							{
								title: 'Повседневные сумки',
								category: '-',
							},
							{
								title: 'Портфели и папки-портфели',
								category: '-',
							},
							{
								title: 'Поясные сумки',
								category: '-',
							},
							{
								title: 'Сумки на длинном ремне',
								category: '-',
							},
							{
								title: 'Сумки с короткой ручкой',
								category: '-',
							},
							{
								title: 'Шоперы и хозяйственные сумки',
								category: '-',
							},
						],
					},
				],
			},
			{
				title: 'Шарфы, палантины',
				category: '-',
				children: [
					{
						title: 'Воротники',
						category: '-',
					},
					{
						title: 'Палантины и шали',
						category: '-',
					},
					{
						title: 'Снуды',
						category: '-',
					},
					{
						title: 'Шарфы',
						category: '-',
					},
				],
			},
		],
	},
	{
		title: 'Украшения',
		category: 'ornamentation',
		icon: <RingIcon />,
		children: [
			{
				title: 'Браслеты',
				category: '-',
			},
			{
				title: 'Броши',
				category: 'brooches',
				children: [
					{
						title: 'Броши из дерева',
						category: '-',
					},
					{
						title: 'Броши из металла',
						category: '-',
					},
					{
						title: 'Броши из пайеток и бисера',
						category: '-',
					},
					{
						title: 'Броши из пластика и полимеров',
						category: '-',
					},
					{
						title: 'Брошь из стекла и керамики',
						category: '-',
					},
					{
						title: 'Другие',
						category: '-',
					},
					{
						title: 'Текстильные броши',
						category: '-',
					},
				],
			},
			{
				title: 'Кольца',
				category: '-',
				children: [
					{
						title: 'Кольца из разных материалов',
						category: '-',
					},
					{
						title: 'Кольца на фалангу',
						category: '-',
					},
					{
						title: 'Кольца обручальные и помолвочные',
						category: '-',
					},
					{
						title: 'Кольца с камнями',
						category: '-',
					},
					{
						title: 'Кольца-печатки',
						category: '-',
					},
					{
						title: 'Минималистичные кольца',
						category: '-',
					},
					{
						title: 'Разъёмные кольца',
						category: '-',
					},
				],
			},
			{
				title: 'Комплекты',
				category: '-',
			},
			{
				title: 'Серьги',
				category: '-',
				children: [
					{
						title: 'Длинные серьги',
						category: '-',
					},
					{
						title: 'Другие серьги',
						category: '-',
					},
					{
						title: 'Клипсы',
						category: '-',
					},
					{
						title: 'Моносерьги',
						category: '-',
					},
					{
						title: 'Пирсинг и каффы',
						category: '-',
					},
					{
						title: 'Пусеты',
						category: '-',
					},
					{
						title: 'Серьги-кольца',
						category: '-',
					},
					{
						title: 'Серьги-трансформеры',
						category: '-',
					},
				],
			},
			{
				title: 'Украшения на шею',
				category: '-',
				children: [
					{
						title: 'Колье',
						category: '-',
					},
					{
						title: 'Кулоны и подвески',
						category: '-',
					},
					{
						title: 'Цепочки',
						category: '-',
					},
					{
						title: 'Чокеры',
						category: '-',
					},
				],
			},
			{
				title: 'Чётки и нити',
				category: '-',
			},
		],
	},
	{
		title: 'Дом и быт',
		category: 'homeAndLiving',
		icon: <HouseIcon />,
		children: [
			{
				title: 'Аксессуары для автомобилей',
				category: 'carAccessories',
			},
			{
				title: 'Ароматы для дома',
				category: 'aromats',
				children: [
					{
						title: 'Масла',
						category: 'oils',
					},
					{
						title: 'Саше',
						category: 'sachet',
					},
					{
						title: 'Спреи',
						category: '-',
					},
				],
			},
			{
				title: 'Ванная комната',
				category: 'bathroom',
				children: [
					{
						title: 'Декор для ванной',
						category: '-',
					},
					{
						title: 'Диспенсеры',
						category: '-',
					},
					{
						title: 'Мыльницы',
						category: '-',
					},
					{
						title: 'Полотенца',
						category: '-',
					},
					{
						title: 'Раковины',
						category: 'washbasin',
					},
					{
						title: 'Хранение в ванной',
						category: 'storageInBath',
						children: [
							{
								title: 'Корзины',
								category: 'baskets',
							},
							{
								title: 'Мешки',
								category: 'bags',
							},
							{
								title: 'Полки, ящики',
								category: '-',
							},
							{
								title: 'Стаканы для зубных щёток',
								category: '-',
							},
						],
					},
					{
						title: 'Шторы и кольца для штор',
						category: '-',
					},
				],
			},
			{
				title: 'Декор стен',
				category: '-',
				children: [
					{
						title: 'Вышивка',
						category: '-',
					},
					{
						title: 'Гипс',
						category: '-',
					},
					{
						title: 'Гобелен',
						category: '-',
					},
					{
						title: 'Грифельные доски',
						category: '-',
					},
					{
						title: 'Декоративные венки',
						category: '-',
					},
					{
						title: 'Дерево',
						category: '-',
					},
					{
						title: 'Интерьерные маски',
						category: '-',
					},
					{
						title: 'Ловцы снов',
						category: '-',
					},
					{
						title: 'Металл',
						category: '-',
					},
					{
						title: 'Печатные постеры',
						category: '-',
					},
					{
						title: 'Природные материалы',
						category: '-',
					},
					{
						title: 'Стекло',
						category: '-',
					},
					{
						title: 'Текстильные панно',
						category: '-',
					},
				],
			},
			{
				title: 'Для животных',
				category: '-',
			},
			{
				title: 'Интерьерный декор',
				category: '-',
				children: [
					{
						title: 'Декоративные игрушки',
						category: '-',
					},
					{
						title: 'Зеркала',
						category: '-',
					},
					{
						title: 'Интерьерные слова и буквы',
						category: '-',
					},
					{
						title: 'Копилки',
						category: '-',
					},
					{
						title: 'Подсвечники',
						category: '-',
					},
					{
						title: 'Подставки и плитки',
						category: '-',
					},
					{
						title: 'Рамки для фотографий',
						category: '-',
					},
					{
						title: 'Свечи',
						category: '-',
					},
					{
						title: 'Статуэтки',
						category: '-',
					},
					{
						title: 'Фотографии',
						category: '-',
					},
					{
						title: 'Часы',
						category: '-',
					},
				],
			},
			{
				title: 'Кухня',
				category: '-',
				children: [
					{
						title: 'Барная посуда',
						category: '-',
						children: [
							{
								title: 'Бокалы',
								category: '-',
							},
							{
								title: 'Пивные кружки и бокалы',
								category: '-',
							},
							{
								title: 'Подставки под бутылки',
								category: '-',
							},
							{
								title: 'Рюмки',
								category: '-',
							},
							{
								title: 'Штопоры, открывалки',
								category: '-',
							},
						],
					},
					{
						title: 'Декор для кухни',
						category: '-',
						children: [
							{
								title: 'Магниты',
								category: '-',
							},
							{
								title: 'Украшения для стола',
								category: '-',
							},
						],
					},
					{
						title: 'Кухонный текстиль',
						category: '-',
						children: [
							{
								title: 'Комплекты кухонного текстиля',
								category: '-',
							},
							{
								title: 'Кухонные полотенца',
								category: '-',
							},
							{
								title: 'Прихватки',
								category: '-',
							},
							{
								title: 'Скатерти',
								category: '-',
							},
							{
								title: 'Столовые дорожки',
								category: '-',
							},
							{
								title: 'Столовые салфетки',
								category: '-',
							},
							{
								title: 'Фартуки',
								category: '-',
							},
						],
					},
					{
						title: 'Посуда для напитков',
						category: '-',
						children: [
							{
								title: 'Бутылки для воды',
								category: '-',
							},
							{
								title: 'Кофейники и чайники',
								category: '-',
							},
							{
								title: 'Кофейные и чайные чашки',
								category: '-',
							},
							{
								title: 'Кружки',
								category: '-',
							},
							{
								title: 'Стаканы',
								category: '-',
							},
							{
								title: 'Термосы и тумблеры',
								category: '-',
							},
						],
					},
					{
						title: 'Посуда для приготовления',
						category: '-',
						children: [
							{
								title: 'Кастрюли',
								category: '-',
							},
							{
								title: 'Разделочные доски',
								category: '-',
							},
							{
								title: 'Сковородки',
								category: '-',
							},
							{
								title: 'Формы для выпечки',
								category: '-',
							},
						],
					},
					{
						title: 'Сервировка',
						category: '-',
						children: [
							{
								title: 'Блюда',
								category: '-',
							},
							{
								title: 'Держатели для салфеток',
								category: '-',
							},
							{
								title: 'Креманки',
								category: '-',
							},
							{
								title: 'Менажницы',
								category: '-',
							},
							{
								title: 'Миски',
								category: '-',
							},
							{
								title: 'Молочники, кувшины',
								category: '-',
							},
							{
								title: 'Пиалы',
								category: '-',
							},
							{
								title: 'Подносы',
								category: '-',
							},
							{
								title: 'Подставки для яиц',
								category: '-',
							},
							{
								title: 'Подставки под горячее',
								category: '-',
							},
							{
								title: 'Подставки под торт, пирожные',
								category: '-',
							},
							{
								title: 'Салатники',
								category: '-',
							},
							{
								title: 'Сахарницы',
								category: '-',
							},
							{
								title: 'Сервировочные доски',
								category: '-',
							},
							{
								title: 'Сервировочные лопатки, ложки',
								category: '-',
							},
							{
								title: 'Солонки и перечницы',
								category: '-',
							},
							{
								title: 'Соусницы',
								category: '-',
							},
							{
								title: 'Столовые приборы',
								category: '-',
							},
							{
								title: 'Столовые сервизы и наборы',
								category: '-',
							},
							{
								title: 'Супницы',
								category: '-',
							},
							{
								title: 'Тарелки',
								category: '-',
							},
							{
								title: 'Хлебницы',
								category: '-',
							},
							{
								title: 'Чайные и кофейные сервизы',
								category: '-',
							},
						],
					},
					{
						title: 'Хранение на кухне',
						category: '-',
						children: [
							{
								title: 'Банки для специй',
								category: '-',
							},
							{
								title: 'Банки и контейнеры',
								category: '-',
							},
							{
								title: 'Держатели и чехлы для ножей',
								category: '-',
							},
							{
								title: 'Подставки для специй',
								category: '-',
							},
							{
								title: 'Подставки под бутылки',
								category: '-',
							},
						],
					},
				],
			},
			{
				title: 'Мебель',
				category: '-',
				children: [
					{
						title: 'Гостиная',
						category: '-',
						children: [
							{
								title: 'Журнальные, приставные столики',
								category: '-',
							},
							{
								title: 'Книжные шкафы и полки',
								category: '-',
							},
							{
								title: 'Консоли',
								category: '-',
							},
							{
								title: 'Кресла, стулья, пуфы',
								category: '-',
							},
							{
								title: 'Рабочие столы',
								category: '-',
							},
						],
					},
					{
						title: 'Кухня',
						category: '-',
						children: [
							{
								title: 'Буфеты',
								category: '-',
							},
							{
								title: 'Обеденные столы',
								category: '-',
							},
							{
								title: 'Обеденные стулья и табуреты',
								category: '-',
							},
							{
								title: 'Полки',
								category: '-',
							},
						],
					},
					{
						title: 'Мебельные и дверные ручки',
						category: '-',
					},
					{
						title: 'Прихожая',
						category: '-',
						children: [
							{
								title: 'Вешалки',
								category: '-',
							},
							{
								title: 'Ключницы',
								category: '-',
							},
							{
								title: 'Крючки',
								category: '-',
							},
							{
								title: 'Полки',
								category: '-',
							},
							{
								title: 'Табуреты',
								category: '-',
							},
						],
					},
					{
						title: 'Спальня',
						category: '-',
						children: [
							{
								title: 'Полки',
								category: '-',
							},
							{
								title: 'Туалетные столики и тумбочки',
								category: '-',
							},
							{
								title: 'Шкафы и комоды',
								category: '-',
							},
						],
					},
				],
			},
			{
				title: 'Освещение',
				category: '-',
				children: [
					{
						title: 'Абажуры',
						category: '-',
					},
					{
						title: 'Бра',
						category: '-',
					},
					{
						title: 'Гирлянды и вывески',
						category: '-',
					},
					{
						title: 'Декоративные настольные лампы',
						category: '-',
					},
					{
						title: 'Люстры и подвесные светильники',
						category: '-',
					},
					{
						title: 'Напольные торшеры',
						category: '-',
					},
					{
						title: 'Ночники',
						category: '-',
					},
				],
			},
			{
				title: 'Текстиль и рукоделие',
				category: '-',
				children: [
					{
						title: 'Аксессуары для рукоделия',
						category: '-',
					},
					{
						title: 'Декоративные подушки',
						category: '-',
					},
					{
						title: 'Ковры и коврики',
						category: '-',
					},
					{
						title: 'Одеяла',
						category: '-',
					},
					{
						title: 'Пледы',
						category: '-',
					},
					{
						title: 'Подушки для сна',
						category: '-',
					},
					{
						title: 'Покрывала',
						category: '-',
					},
					{
						title: 'Постельное белье',
						category: '-',
						children: [
							{
								title: 'Комплекты постельного белья',
								category: '-',
							},
							{
								title: 'Наволочки',
								category: '-',
							},
							{
								title: 'Пододеяльники',
								category: '-',
							},
							{
								title: 'Простыни',
								category: '-',
							},
						],
					},
					{
						title: 'Пряжа',
						category: '-',
					},
					{
						title: 'Ткани',
						category: '-',
					},
					{
						title: 'Чехлы на подушки',
						category: '-',
					},
					{
						title: 'Шторы',
						category: '-',
					},
				],
			},
			{
				title: 'Хранение',
				category: '-',
				children: [
					{
						title: 'Ключницы',
						category: '-',
					},
					{
						title: 'Корзины',
						category: '-',
					},
					{
						title: 'Коробки, сундуки',
						category: '-',
					},
					{
						title: 'Хранение белья',
						category: '-',
					},
					{
						title: 'Хранение в ванной',
						category: '-',
					},
					{
						title: 'Хранение косметики',
						category: '-',
					},
					{
						title: 'Хранение на кухне',
						category: '-',
					},
					{
						title: 'Хранение на рабочем месте',
						category: '-',
					},
					{
						title: 'Хранение на улице',
						category: '-',
					},
					{
						title: 'Хранение обуви',
						category: '-',
					},
					{
						title: 'Хранение украшений',
						category: '-',
					},
					{
						title: 'Ящики',
						category: '-',
					},
				],
			},
		],
	},
	{
		title: 'Растения и сад',
		category: 'plantsAndGarden',
		icon: <PlantIcon />,
		children: [
			{
				title: 'Для сада и дачи',
				category: '-',
				children: [
					{
						title: 'Гамаки',
						category: '-',
					},
					{
						title: 'Качели',
						category: '-',
					},
					{
						title: 'Кормушки и скворечники',
						category: '-',
					},
					{
						title: 'Лейки',
						category: '-',
					},
					{
						title: 'Подставки и опоры для растений',
						category: '-',
					},
					{
						title: 'Растения',
						category: '-',
					},
					{
						title: 'Садовая мебель',
						category: '-',
					},
					{
						title: 'Уличные вазоны и горшки',
						category: '-',
					},
					{
						title: 'Уличные кашпо',
						category: '-',
					},
				],
			},
			{
				title: 'Флористика',
				category: '-',
				children: [
					{
						title: 'Вазы для флорариумов',
						category: '-',
					},
					{
						title: 'Горшки',
						category: '-',
					},
					{
						title: 'Живые цветы',
						category: '-',
					},
					{
						title: 'Искусственные цветы',
						category: '-',
					},
					{
						title: 'Кашпо',
						category: '-',
					},
					{
						title: 'Композиции из суккулентов',
						category: '-',
					},
					{
						title: 'Подставки под горшки',
						category: '-',
					},
					{
						title: 'Растения в горшках',
						category: '-',
					},
					{
						title: 'Сухоцветы',
						category: '-',
					},
				],
			},
		],
	},
	{
		title: 'Забота о себе',
		category: 'selfcare',
		icon: <BrushIcon />,
		children: [
			{
				title: 'Декоративная косметика',
				category: '-',
				children: [
					{
						title: 'Аксессуары для макияжа',
						category: '-',
					},
					{
						title: 'Для глаз',
						category: '-',
					},
					{
						title: 'Для губ',
						category: '-',
					},
					{
						title: 'Для лица',
						category: '-',
					},
					{
						title: 'Для ногтей',
						category: '-',
					},
					{
						title: 'Хранение косметики',
						category: '-',
					},
				],
			},
			{
				title: 'Для душа',
				category: '-',
				children: [
					{
						title: 'Бомбочки для ванны',
						category: '-',
					},
					{
						title: 'Мочалки, спонжи',
						category: '-',
					},
					{
						title: 'Пена для ванны',
						category: '-',
					},
					{
						title: 'Соль для ванны',
						category: '-',
					},
					{
						title: 'Шапочки для душа',
						category: '-',
					},
				],
			},
			{
				title: 'Парфюмерия',
				category: '-',
			},
			{
				title: 'Уход за волосами',
				category: '-',
				children: [
					{
						title: 'Средства для волос',
						category: '-',
					},
					{
						title: 'Тюрбаны и наволочки',
						category: '-',
					},
				],
			},
			{
				title: 'Уход за лицом',
				category: '-',
				children: [
					{
						title: 'Гидролаты, масла',
						category: '-',
					},
					{
						title: 'Косметика до и после бритья',
						category: '-',
					},
					{
						title: 'Кремы',
						category: '-',
					},
					{
						title: 'Лосьоны, тоники',
						category: '-',
					},
					{
						title: 'Маски',
						category: '-',
					},
					{
						title: 'Мыло',
						category: '-',
					},
					{
						title: 'Наборы косметики',
						category: '-',
					},
					{
						title: 'Пенки',
						category: '-',
					},
					{
						title: 'Пилинги, скрабы',
						category: '-',
					},
					{
						title: 'Спонжи для умывания',
						category: '-',
					},
					{
						title: 'Уход за бородой и усами',
						category: '-',
					},
					{
						title: 'Уход за губами',
						category: '-',
					},
				],
			},
			{
				title: 'Уход за телом',
				category: '-',
				children: [
					{
						title: 'Гели для душа',
						category: '-',
					},
					{
						title: 'Гидролаты, масла',
						category: '-',
					},
					{
						title: 'Дезодоранты',
						category: '-',
					},
					{
						title: 'Мыло',
						category: '-',
					},
					{
						title: 'Скрабы',
						category: '-',
					},
					{
						title: 'Средства для увлажнения кожи',
						category: '-',
					},
					{
						title: 'Уход за ногами',
						category: '-',
					},
					{
						title: 'Уход за ногтями',
						category: '-',
					},
					{
						title: 'Уход за руками',
						category: '-',
					},
				],
			},
		],
	},
	{
		title: 'Искусство',
		category: 'artAndCulture',
		icon: <PaletteIcon />,
		children: [
			{
				title: 'Графика',
				category: '-',
				children: [
					{
						title: 'Акварель',
						category: '-',
					},
					{
						title: 'Акрил',
						category: '-',
					},
					{
						title: 'Графитный карандаш',
						category: '-',
					},
					{
						title: 'Кислография',
						category: '-',
					},
					{
						title: 'Линер',
						category: '-',
					},
					{
						title: 'Линогравюра',
						category: '-',
					},
					{
						title: 'Маркер',
						category: '-',
					},
					{
						title: 'Масляная пастель',
						category: '-',
					},
					{
						title: 'Монотипия',
						category: '-',
					},
					{
						title: 'Офорт',
						category: '-',
					},
					{
						title: 'Пастель',
						category: '-',
					},
					{
						title: 'Сухая игла',
						category: '-',
					},
					{
						title: 'Тушь',
						category: '-',
					},
					{
						title: 'Шелкография',
						category: '-',
					},
				],
			},
			{
				title: 'Живопись',
				category: '-',
				children: [
					{
						title: 'Акрил',
						category: '-',
					},
					{
						title: 'Гуашь',
						category: '-',
					},
					{
						title: 'Масло',
						category: '-',
					},
					{
						title: 'Темпера',
						category: '-',
					},
					{
						title: 'Эмаль',
						category: '-',
					},
				],
			},
			{
				title: 'Скульптура',
				category: '-',
				children: [
					{
						title: 'Гипс',
						category: '-',
					},
					{
						title: 'Дерево',
						category: '-',
					},
					{
						title: 'Керамика',
						category: '-',
					},
					{
						title: 'Металл',
						category: '-',
					},
					{
						title: 'Мрамор',
						category: '-',
					},
				],
			},
		],
	},
	{
		title: 'Развлечения и подарки',
		category: 'entertainmentAndGifts',
		icon: <GiftIcon />,
		children: [
			{
				title: 'Бумажные и канцелярские изделия',
				category: '-',
				children: [
					{
						title: 'Блокноты',
						category: '-',
					},
					{
						title: 'Закладки',
						category: '-',
					},
					{
						title: 'Календари, ежедневники',
						category: '-',
					},
					{
						title: 'Канцелярские принадлежности',
						category: '-',
					},
					{
						title: 'Книги',
						category: '-',
					},
					{
						title: 'Конверты',
						category: '-',
					},
					{
						title: 'Наклейки',
						category: '-',
					},
					{
						title: 'Обложки для книг',
						category: '-',
					},
					{
						title: 'Открытки',
						category: '-',
					},
					{
						title: 'Раскраски и оригами',
						category: '-',
					},
					{
						title: 'Тетради',
						category: '-',
					},
					{
						title: 'Фотоальбомы',
						category: '-',
					},
				],
			},
			{
				title: 'Для праздника',
				category: '-',
				children: [
					{
						title: 'Аксессуары для праздника',
						category: '-',
					},
					{
						title: 'Подарочная упаковка',
						category: '-',
					},
				],
			},
			{
				title: 'Игры, развлечения, спорт',
				category: '-',
				children: [
					{
						title: 'Йога и пилатес',
						category: '-',
					},
					{
						title: 'Настольные игры',
						category: '-',
					},
					{
						title: 'Спортивные комплексы',
						category: '-',
					},
					{
						title: 'Туризм и пляжный отдых',
						category: '-',
					},
				],
			},
			{
				title: 'Музыка',
				category: '-',
				children: [
					{
						title: 'Винил',
						category: '-',
					},
					{
						title: 'Музыкальные инструменты',
						category: '-',
					},
				],
			},
			{
				title: 'Подарки',
				category: '-',
			},
		],
	},
	{
		title: 'Винтаж',
		category: 'vintage',
		icon: <DiskIcon />,
		children: [
			{
				title: 'Аксессуары',
				category: '-',
				children: [
					{
						title: 'Галстуки и запонки',
						category: '-',
					},
					{
						title: 'Наручные часы',
						category: '-',
					},
					{
						title: 'Очки',
						category: '-',
					},
					{
						title: 'Сумки, рюкзаки и кошельки',
						category: '-',
					},
					{
						title: 'Шарфы, палантины',
						category: '-',
					},
				],
			},
			{
				title: 'Дом и быт',
				category: '-',
				children: [
					{
						title: 'Домашний декор',
						category: '-',
					},
					{
						title: 'Домашний текстиль, рукоделие',
						category: '-',
					},
					{
						title: 'Кухня',
						category: '-',
					},
					{
						title: 'Мебель',
						category: '-',
					},
					{
						title: 'Подарки',
						category: '-',
					},
					{
						title: 'Хранение',
						category: '-',
					},
				],
			},
			{
				title: 'Одежда и обувь',
				category: '-',
				children: [
					{
						title: 'Женская одежда',
						category: '-',
						children: [
							{
								title: 'Брюки',
								category: '-',
							},
							{
								title: 'Верхняя одежда',
								category: '-',
							},
							{
								title: 'Домашняя одежда',
								category: '-',
							},
							{
								title: 'Костюмы, комплекты',
								category: '-',
							},
							{
								title: 'Платья',
								category: '-',
							},
							{
								title: 'Топы',
								category: '-',
							},
							{
								title: 'Юбки',
								category: '-',
							},
						],
					},
					{
						title: 'Мужская одежда',
						category: '-',
						children: [
							{
								title: 'Брюки',
								category: '-',
							},
							{
								title: 'Верхняя одежда',
								category: '-',
							},
							{
								title: 'Костюмы, комплекты',
								category: '-',
							},
							{
								title: 'Одежда для дома',
								category: '-',
							},
						],
					},
				],
			},
			{
				title: 'Развлечения',
				category: '-',
				children: [
					{
						title: 'Книги',
						category: '-',
					},
					{
						title: 'Музыка',
						category: '-',
					},
				],
			},
			{
				title: 'Украшения',
				category: '-',
				children: [
					{
						title: 'Браслеты',
						category: '-',
					},
					{
						title: 'Броши',
						category: '-',
					},
					{
						title: 'Запонки, зажимы',
						category: '-',
					},
					{
						title: 'Кольца',
						category: '-',
					},
					{
						title: 'Комплекты',
						category: '-',
					},
					{
						title: 'Серьги',
						category: '-',
					},
					{
						title: 'Украшения на шею',
						category: '-',
					},
					{
						title: 'Хранение украшений',
						category: '-',
					},
				],
			},
		],
	},
];
