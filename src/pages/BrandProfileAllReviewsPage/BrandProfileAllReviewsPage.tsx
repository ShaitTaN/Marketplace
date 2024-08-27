import classes from './styles.module.scss';
import {Flex} from 'antd';
import {ClickableIcon} from '../../ui/ClickableIcon/ClickableIcon';
import ArrowLeft from '../../assets/icons/ArrowLeftSmall.svg';
import {Wrapper} from '../../ui/Wrapper/Wrapper';
import {useNavigate} from 'react-router-dom';
import {routesLinksEnum} from '../../app/routes';
import {ReviewCard} from '../../modules/ProductReviews/components/ReviewCard/ReviewCard';
import {ReviewsRating} from '../../modules/ProductReviews/components/ReviewsRating/ReviewsRating';

const data = [
	{
		productName: 'Рубашка удлинённая с шортами из натурального льна',
		productRate: 5,
		review: {
			authorName: 'Мария',
			avaSrc:
				'https://s3-alpha-sig.figma.com/img/c866/4835/2e7c65dab9f5c0d917bb6e5c925c04c4?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jdMhmarugGYFDoos19PHy2O9Zj09mfuoT25jlJpcfEjQ59L6xf1dXaVQnmumT6iHwBDxHzfsdZufNAhD2HXDydGMzYFKc2I01lgvAR3Q0BwJ8BicQz0ei~zxSws01G8Gpr4vxe414pSyz1ciivDJtHYk8YIPaTeBcCs3BrjWEgKQ7BABhk-6hSxNenaZSbosp~Qv55xJas6xNGo8SOUE-dhTFjz5RmVwLiogNvWl4WGFBDwLpepdcGJex5V6R0MkizzI4oF-p8zMs0N5yGc3pdBl8ed3zK4kn9DuMNCfIQvMMve6xLzJi3zRUYI62W1yW~Hvwjm68jt4OTwL6nRw7Q__',
			date: '7 дек в 20:00',
			text: 'Очень мягкая!Нереально приятный материал!!!Плюс еще в том,что футболка плотная и апв зимой носить под пуховик вполне комфортно! Спасибо за качественную вещь!!!',
			imagesSrc: [
				'https://s3-alpha-sig.figma.com/img/e224/093b/c4281ad933df576a189fffb136c72f55?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d3Skv6ngLMosYLymPmlQszPY~JtCwPV3BkuZeIrYoxPib5V99Pt~j5Dfi812QFrALTAjwTV~Iu-hW5T9a7JVCSG5u~ttSqUXbGQmDyAAnqEBVtI87w4qsnza4ZINI-qITKD3bqHdp7yHEqs1jyN8U2YbzCDHlOzzvLrsMLYeWCazsNQZlUF6v8Tdt1KxtkedM~P9S5PY5KDrFCbDL8aRjLUYuOYUGjWUX6dwi4eRR2qwYUuAJCJZKCwmkLWBX4uXFp7K6oI3mSQ~zubkjlVMda0Zeg-u2lv01rhG-ipsViGS-kw9FyGn5Hb6l0wSAb3N6BO2-lSu6DajP5Bou6Cgzw__',
				'https://s3-alpha-sig.figma.com/img/8440/a12e/0771cd9d459468e48ab6d1ae3cc619b7?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B7nSruLrSVTOjP7QWjKeHTxmpXcoMSzZHrQFu1WcLl-j42uU456c1ttMsP83NWr0AusrTmLlojQCZvZr~uwah4wXqiZxp6PCHvjWrHZ-vujovuLEttOdCwkK5h8Zpvd1RkP3UOQOF~Y-vnRhCNrTBDj5l7X1sOeu5gULX0XpWNPSUp50m2KUNyKhMgIkMeKYv8ks0Yynj1J6DLebjGDgH42oZYb2XvUoYvKtCJ1IkD--xhXnJX2wdgOj8qnx0x6dP29YzJdPjTwrfOLTov6r1XnsmotcHVPflZF-Rzx2bi3-BJBioYx-3LUlHlhbRPBb6-JHbrTo3QZ2Rn91LTi0VQ__',
				'https://s3-alpha-sig.figma.com/img/8440/a12e/0771cd9d459468e48ab6d1ae3cc619b7?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B7nSruLrSVTOjP7QWjKeHTxmpXcoMSzZHrQFu1WcLl-j42uU456c1ttMsP83NWr0AusrTmLlojQCZvZr~uwah4wXqiZxp6PCHvjWrHZ-vujovuLEttOdCwkK5h8Zpvd1RkP3UOQOF~Y-vnRhCNrTBDj5l7X1sOeu5gULX0XpWNPSUp50m2KUNyKhMgIkMeKYv8ks0Yynj1J6DLebjGDgH42oZYb2XvUoYvKtCJ1IkD--xhXnJX2wdgOj8qnx0x6dP29YzJdPjTwrfOLTov6r1XnsmotcHVPflZF-Rzx2bi3-BJBioYx-3LUlHlhbRPBb6-JHbrTo3QZ2Rn91LTi0VQ__',
			],
		},
	},
	{
		productName: 'Костюм васильковый с брюками и рубашкой',
		productRate: 3,
		review: {
			authorName: 'Мария',
			avaSrc:
				'https://s3-alpha-sig.figma.com/img/d3ff/0b29/820a21d31d3d055d7571e9762df49cf8?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CgHAll3RKitD-m28w~QAdXE-3gMOnVewtrXGdDpaY9LdJnXNzcBMq4DL72usGSNFovqr8nz07B58zZdnjEcxl3alhT1d35DLl5elVXwT4Y6kT5nNxl48MrbCWVo~iONdj8CzF4crJX-~-cEVEmLf7pmSz-jGAM41v6Uhgn9h-Z61Yp6~FVa8tdKjG12IMAw~ILwq6FGhEQCRoouK~DCNQfgmtsxn4Vyvt2YbnWjbFwaa-sM-3Q4zRt9~jNof2R88ty-0n4OfUFeBFBP0zGt7kQY6erbXcg2anbzYJSQbYzKYQIULthfcuzTHpkmOYbtzpn5IzWeC3ZnAWsvVzlRmww__',
			date: '7 дек в 20:00',
			text: 'Могли бы сделать и получше ((',
		},
	},
	{
		productName: 'Костюм васильковый с брюками и рубашкой',
		productRate: 2,
		review: {
			authorName: 'Мария',
			avaSrc:
				'https://s3-alpha-sig.figma.com/img/40d6/1172/72da59239375b5a28f43e72a4c46e553?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MK8TBYaoZ24pfjto04g39EDnWPSCF2g-reTtJ54YSZ~kWCKgEGJGHSdMtpGk6A13ctbU4ydPn0twKzLfxhdwCnoVnLyitXM9-GqmSiObgl-nW~1p-LATFLq7kp1qD3BijEjgygBQheWi1nVoApEEC8a-jK6VptLLTSA379ePH8pL0Gs7Gkqxpx7nQMwAcibZIulnEGvbyO~64yn6zPKgLs6lkoQb0pkG1inXiST6-2h5ECA39JTS5A~-sBBdgdEBKbg6uQ31evFXeVKg970hQ1iFdp9VB2g4IUxx7ZaiTQR4QlL9jdpeCIo9V2cTpFvyUZ7Myh6mdwiITC5mKXJyTw__',
			date: '7 дек в 20:00',
			text: 'Полное разочарование',
			imagesSrc: [
				'https://s3-alpha-sig.figma.com/img/4bd7/08f7/aeaddccb520fc79232bfd271e3985b98?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IY3jwEAKVqcfPmJ72mMyO2A-cwveG1EHUAXMzVFwQas4gs9QpfuIk7zAFZKHk5d5qcoSCOUYqga7bM5RSRXL7g96WBlxB0dPkebAgWTUjnSs~-fdRsNpjzQBSXuQnGh63pUoRflGhrd63oA2Xop5FEoLpTymQ4XYF0pNPPsJX7bffQXydxV6REl5LNJxMV7twaMws8WsyOzM2YG-uWpYfFLlDiMS~~0WNkutkBV0DT~NB5SIO3GRrDTzFkG~qd6Uyf-szXSrIjsQbF5NNwTqYS6DfjQ6dqOsrJwRJlJu8xzhw2~9V3HdJhz3zv1T4b7-xh0Rz5tfmxZylNwLQr6WuA__',
			],
		},
	},
];

export const BrandProfileAllReviewsPage = () => {
	const navigate = useNavigate();
	return (
		<Wrapper style={{padding: '12px 0px', gap: '12px'}}>
			<Flex vertical gap={12}>
				<Flex vertical gap={16} className={classes.brandProfileAllReviewsTitle}>
					<ClickableIcon
						className={classes.backButton}
						icon={<ArrowLeft style={{width: '18px', height: '12px'}} />}
						value='К бренду'
						onClick={() => navigate(routesLinksEnum.brandProfile)}
					/>
					<h3>
						Отзывы <sup>634</sup>
					</h3>
				</Flex>
				{data.map((item, index) => (
					<ReviewCard key={index} product={item} />
				))}
			</Flex>
			<ReviewsRating totalRate={634} name='бренда' />
		</Wrapper>
	);
};
