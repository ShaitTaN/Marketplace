import {ReviewItem} from '../ReviewItem/ReviewItem';

const data = [
	{
		authorName: 'Мария',
		rate: 5,
		avaSrc:
			'https://s3-alpha-sig.figma.com/img/c866/4835/2e7c65dab9f5c0d917bb6e5c925c04c4?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jdMhmarugGYFDoos19PHy2O9Zj09mfuoT25jlJpcfEjQ59L6xf1dXaVQnmumT6iHwBDxHzfsdZufNAhD2HXDydGMzYFKc2I01lgvAR3Q0BwJ8BicQz0ei~zxSws01G8Gpr4vxe414pSyz1ciivDJtHYk8YIPaTeBcCs3BrjWEgKQ7BABhk-6hSxNenaZSbosp~Qv55xJas6xNGo8SOUE-dhTFjz5RmVwLiogNvWl4WGFBDwLpepdcGJex5V6R0MkizzI4oF-p8zMs0N5yGc3pdBl8ed3zK4kn9DuMNCfIQvMMve6xLzJi3zRUYI62W1yW~Hvwjm68jt4OTwL6nRw7Q__',
		date: '7 дек в 20:00',
		text: 'Очень мягкая!Нереально приятный материал!!!Плюс еще в том,что футболка плотная и апв зимой носить под пуховик вполне комфортно! Спасибо за качественную вещь!!!',
		imagesSrc: [
			'https://s3-alpha-sig.figma.com/img/e224/093b/c4281ad933df576a189fffb136c72f55?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d3Skv6ngLMosYLymPmlQszPY~JtCwPV3BkuZeIrYoxPib5V99Pt~j5Dfi812QFrALTAjwTV~Iu-hW5T9a7JVCSG5u~ttSqUXbGQmDyAAnqEBVtI87w4qsnza4ZINI-qITKD3bqHdp7yHEqs1jyN8U2YbzCDHlOzzvLrsMLYeWCazsNQZlUF6v8Tdt1KxtkedM~P9S5PY5KDrFCbDL8aRjLUYuOYUGjWUX6dwi4eRR2qwYUuAJCJZKCwmkLWBX4uXFp7K6oI3mSQ~zubkjlVMda0Zeg-u2lv01rhG-ipsViGS-kw9FyGn5Hb6l0wSAb3N6BO2-lSu6DajP5Bou6Cgzw__',
			'https://s3-alpha-sig.figma.com/img/8440/a12e/0771cd9d459468e48ab6d1ae3cc619b7?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B7nSruLrSVTOjP7QWjKeHTxmpXcoMSzZHrQFu1WcLl-j42uU456c1ttMsP83NWr0AusrTmLlojQCZvZr~uwah4wXqiZxp6PCHvjWrHZ-vujovuLEttOdCwkK5h8Zpvd1RkP3UOQOF~Y-vnRhCNrTBDj5l7X1sOeu5gULX0XpWNPSUp50m2KUNyKhMgIkMeKYv8ks0Yynj1J6DLebjGDgH42oZYb2XvUoYvKtCJ1IkD--xhXnJX2wdgOj8qnx0x6dP29YzJdPjTwrfOLTov6r1XnsmotcHVPflZF-Rzx2bi3-BJBioYx-3LUlHlhbRPBb6-JHbrTo3QZ2Rn91LTi0VQ__',
		],
	},
	{
		authorName: 'Елена',
		rate: 4,
		avaSrc:
			'https://s3-alpha-sig.figma.com/img/d3ff/0b29/820a21d31d3d055d7571e9762df49cf8?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CgHAll3RKitD-m28w~QAdXE-3gMOnVewtrXGdDpaY9LdJnXNzcBMq4DL72usGSNFovqr8nz07B58zZdnjEcxl3alhT1d35DLl5elVXwT4Y6kT5nNxl48MrbCWVo~iONdj8CzF4crJX-~-cEVEmLf7pmSz-jGAM41v6Uhgn9h-Z61Yp6~FVa8tdKjG12IMAw~ILwq6FGhEQCRoouK~DCNQfgmtsxn4Vyvt2YbnWjbFwaa-sM-3Q4zRt9~jNof2R88ty-0n4OfUFeBFBP0zGt7kQY6erbXcg2anbzYJSQbYzKYQIULthfcuzTHpkmOYbtzpn5IzWeC3ZnAWsvVzlRmww__',
		date: '1 дек в 14:13',
		text: 'Очень красивый комплект, брала на отдых) ',
		imagesSrc: [
			'https://s3-alpha-sig.figma.com/img/e221/2d3d/e3fcd88032d93fbc1a5a7a6c6eeceed3?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CyNd8Tul0W66A1iVgYepWWiRTtc94CczWMUe0eTLBJapaYdEOrjXwiGteyRm4r6qWeMwDcZSR7lqxaEEn4DPBKS6WyudTTcUftKcvlaG0mW9QBoQTn7RgvlsPYySsfm9nMCUB4X0TEP4jSdpwUKZQdJnIYmmlewu1tSxBwh8fl-LV57F3Pw42H493fp0QmKlySlDT4yFf9wwPHjoyFd~AUXBCLofgAKu4Axa8UQZkUPMwOp7yAd0SWNVnqP6nP5YftFfiwKvOuZ4SKiJ0v3NR5c2RadV~tRsKTdXY71MgIneXE2fq6c7S3v5W-pXXVM9ViQEtpWhot2f6V4XeY1kzw__',
		],
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
		authorName: 'Вероника',
		rate: 3,
		avaSrc:
			'https://s3-alpha-sig.figma.com/img/40d6/1172/72da59239375b5a28f43e72a4c46e553?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MK8TBYaoZ24pfjto04g39EDnWPSCF2g-reTtJ54YSZ~kWCKgEGJGHSdMtpGk6A13ctbU4ydPn0twKzLfxhdwCnoVnLyitXM9-GqmSiObgl-nW~1p-LATFLq7kp1qD3BijEjgygBQheWi1nVoApEEC8a-jK6VptLLTSA379ePH8pL0Gs7Gkqxpx7nQMwAcibZIulnEGvbyO~64yn6zPKgLs6lkoQb0pkG1inXiST6-2h5ECA39JTS5A~-sBBdgdEBKbg6uQ31evFXeVKg970hQ1iFdp9VB2g4IUxx7ZaiTQR4QlL9jdpeCIo9V2cTpFvyUZ7Myh6mdwiITC5mKXJyTw__',
		date: '7 дек в 20:00',
		text: 'Странный пошив ((',
		imagesSrc: [
			'https://s3-alpha-sig.figma.com/img/4bd7/08f7/aeaddccb520fc79232bfd271e3985b98?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IY3jwEAKVqcfPmJ72mMyO2A-cwveG1EHUAXMzVFwQas4gs9QpfuIk7zAFZKHk5d5qcoSCOUYqga7bM5RSRXL7g96WBlxB0dPkebAgWTUjnSs~-fdRsNpjzQBSXuQnGh63pUoRflGhrd63oA2Xop5FEoLpTymQ4XYF0pNPPsJX7bffQXydxV6REl5LNJxMV7twaMws8WsyOzM2YG-uWpYfFLlDiMS~~0WNkutkBV0DT~NB5SIO3GRrDTzFkG~qd6Uyf-szXSrIjsQbF5NNwTqYS6DfjQ6dqOsrJwRJlJu8xzhw2~9V3HdJhz3zv1T4b7-xh0Rz5tfmxZylNwLQr6WuA__',
			'https://s3-alpha-sig.figma.com/img/38b4/bc94/be9e3f35c1ff320f5ebfc585d84dcb31?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NdSph9Zhc9hjYuZEKK~iGplOkmLg3ooi7GRI28VXYjTdwxXWX9DXeYQJwSIpa~wpdWqpm3b1Ee0I8kwr9DjFHxWowuEIy~3DVouYTtBgl1-VCxtnEPSgFRDWF9RAn3wMU7ATv36nLtfmOLcV9a9uEWx3uCCkWFoGwhDFeVyJOgXYH2QxGFKIKeP1pJoQkyuQPaXGTtjDBgXJocGoApI0IHa3oq1yEM9ISL85qcLhUJCOvafs2CUnXuoc0rCF0twxygUgoxefanic4ICv0Mqpf8mrdZXITsIFpEd02ZM3DDJET9vjXiBsljHO5TeXX79RcU1aVrJwAVNmdHeNDRX0fA__',
		],
		replies: [
			{
				authorName: 'Brand Name',
				avaSrc:
					'https://s3-alpha-sig.figma.com/img/a804/cea6/16b967d8fad6f8b4958a54d543f6f7b2?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ie1kI0g-IxbRW77nS84nWcmzz9D9s-cFJyAA5nBeMirlwkI0Ob7sbqai-FPO7UR8JZePfeJfWa2WdR0BvoJDinFShRIDXHR4Z3DocLaq~FlI-wtVAwkwErnUXRSEdCxkfKGQ8MGxJMVJgFcT3kOzyXUftPP45UdCLprLeQJkVsnMrTxhjWoVyLJSAlN-q4WUK1Oe83emQIscsF6htfLC7t22TBEebaeuZcRhL0QUHs8j9KDjpOL~~VDd2odNmr5qyIBWI4mNGKaGXoI8MVL~9B-XfOm2tF5nkdu60XhPiao4zX4NrPEwn0qdFitpmEMDEwzFw6BOJNndpCZoaNEudw__',
				date: '7 дек в 20:32',
				text: 'Благодарим вас за обратную связь! Мы всегда стремимся к высокому качеству наших товаров и будем обязательно учесть ваш комментарий о странном пошиве. Мы обязательно передадим информацию нашим производителям, чтобы улучшить качество изделий в будущем. Спасибо за ваше внимание и доверие к нашему бренду.',
			},
			{
				authorName: 'Вероника',
				avaSrc:
					'https://s3-alpha-sig.figma.com/img/40d6/1172/72da59239375b5a28f43e72a4c46e553?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MK8TBYaoZ24pfjto04g39EDnWPSCF2g-reTtJ54YSZ~kWCKgEGJGHSdMtpGk6A13ctbU4ydPn0twKzLfxhdwCnoVnLyitXM9-GqmSiObgl-nW~1p-LATFLq7kp1qD3BijEjgygBQheWi1nVoApEEC8a-jK6VptLLTSA379ePH8pL0Gs7Gkqxpx7nQMwAcibZIulnEGvbyO~64yn6zPKgLs6lkoQb0pkG1inXiST6-2h5ECA39JTS5A~-sBBdgdEBKbg6uQ31evFXeVKg970hQ1iFdp9VB2g4IUxx7ZaiTQR4QlL9jdpeCIo9V2cTpFvyUZ7Myh6mdwiITC5mKXJyTw__',
				date: '8 дек в 12:32',
				text: 'Возможно прогадала с размером...',
			},
		],
	},
];

export const Reviews = () => {
	return (
		<>
			{data.map((item, i) => (
				<ReviewItem key={new Date().getTime() + i} review={item} />
			))}
		</>
	);
};
