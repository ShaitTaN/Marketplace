import {Flex} from 'antd';
import ArrowHead from '../../../../assets/icons/arrowHead.svg';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';
import {QuestionInput} from '../QuestionInput/QuestionInput';
import {Comment} from '../../../../components/Comment/Comment';

const data = [
	{
		authorName: 'Женя',
		avaSrc:
			'https://s3-alpha-sig.figma.com/img/a147/ea35/860acaf040e7f6830291701f1cb3b599?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K4ymZfzTqG59p85N5GhI3OnpG4KyLZSvmr-UgD75fTTJkmEMBDvpoSNqTAaHIK-5zQqhb4dql9zYuV6DbScPqe0lHnvrtPUcQH4uZXTBQ1UXUD5H882EVuuwCFM2cXG-2amvUGchEaRjN55hGzf4RGEUQkGOl6A6E8JvrxWlSVyT6pmq4R-hsxmcRkSE7CMq7-qZ71AL-r~8Xm8EjENWQhrZDp87S4NLTgR6KxJ-O~A9sCBXDOwzZhFBQ5luQq4EEai7QVIH3TkaBXxCAeiqip9F2beBJeGhRiy9n-AFRfLxM7coHH1D6pOpJZTjBVqNDYCA4s9qW0fBJfbCxLxLbg__',
		date: '8 дек в 12:32',
		text: 'Здравствуйте. Подскажите пожалуйста на рост 153 ог 75, от 57 подойдёт? Не велик будет? Не знаю какой размер выбрать.',
		replies: [
			{
				authorName: 'Brand Name',
				avaSrc:
					'https://s3-alpha-sig.figma.com/img/a804/cea6/16b967d8fad6f8b4958a54d543f6f7b2?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ie1kI0g-IxbRW77nS84nWcmzz9D9s-cFJyAA5nBeMirlwkI0Ob7sbqai-FPO7UR8JZePfeJfWa2WdR0BvoJDinFShRIDXHR4Z3DocLaq~FlI-wtVAwkwErnUXRSEdCxkfKGQ8MGxJMVJgFcT3kOzyXUftPP45UdCLprLeQJkVsnMrTxhjWoVyLJSAlN-q4WUK1Oe83emQIscsF6htfLC7t22TBEebaeuZcRhL0QUHs8j9KDjpOL~~VDd2odNmr5qyIBWI4mNGKaGXoI8MVL~9B-XfOm2tF5nkdu60XhPiao4zX4NrPEwn0qdFitpmEMDEwzFw6BOJNndpCZoaNEudw__',
				date: '8 дек в 12:32',
				text: 'Да, мне тоже очень понравился материал',
				pinned: true,
			},
			{
				authorName: 'Анна',
				avaSrc:
					'https://s3-alpha-sig.figma.com/img/bc12/40db/32f54acb4e96ab4e0ae6d6e200911627?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JBcdLzJPHpKpkG89T5UFu3lAHqhJ05t~FWVTUY-kBVl7efMNk94lofT9p7YObSTfv92wMQLd8nl0HQtFaaK-TPvt0RhjNUzgU1dn9Bo2r5cEojrkz4zWdf77Jmi6-hZqfMC9boMOS8U3tpP0z84IKPccHTVOIHKYCXFA037P-FuqKTv3P8l1pp1eKSIAEhrLDDKjf-Kh96ydC9HMXiH7sr~wm-BAmgMqMCs84WEQoXXanZC1yDAPXW2WJLtcPh5-~7KK-tx3x2Rfnr6kaoCLegr4syXSYv-6Mxvty34LiQpp6oWZFcMiPrmdF1k-~oY2NOHneVO~vYMjES0JfcIHBw__',
				date: '8 дек в 12:32',
				text: 'Да, мне тоже очень понравился материал',
				pinned: false,
			},
			{
				authorName: 'Анна',
				avaSrc:
					'https://s3-alpha-sig.figma.com/img/bc12/40db/32f54acb4e96ab4e0ae6d6e200911627?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JBcdLzJPHpKpkG89T5UFu3lAHqhJ05t~FWVTUY-kBVl7efMNk94lofT9p7YObSTfv92wMQLd8nl0HQtFaaK-TPvt0RhjNUzgU1dn9Bo2r5cEojrkz4zWdf77Jmi6-hZqfMC9boMOS8U3tpP0z84IKPccHTVOIHKYCXFA037P-FuqKTv3P8l1pp1eKSIAEhrLDDKjf-Kh96ydC9HMXiH7sr~wm-BAmgMqMCs84WEQoXXanZC1yDAPXW2WJLtcPh5-~7KK-tx3x2Rfnr6kaoCLegr4syXSYv-6Mxvty34LiQpp6oWZFcMiPrmdF1k-~oY2NOHneVO~vYMjES0JfcIHBw__',
				date: '8 дек в 12:32',
				text: 'Да, мне тоже очень понравился материал',
				pinned: false,
			},
		],
	},
	{
		authorName: 'Эвелина',
		avaSrc:
			'https://s3-alpha-sig.figma.com/img/c054/07f2/8e527dbb135738f26412ff99d0ce947e?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nAnPJG4PMNhO5QI5WoAp0quv323yYEtWJe5N5na6DlFZ2dHnFsUAscpzFows1COyc7GoLWVtcY93Q8u1rWynmyykaCPVtBp5ag94fPo-i-Vkh8VvvZsC5y1viVrDqWS83Zl85nLcrkiyCAJJyKYj1sAsZQfR6v68lKVeDrUApjntSlaNM-6BzUy02WSyCp78AJgEfozw29O31SY1MS0ZJ39Cmgo5rk9~PUp14cQxM2Ya8IhVvUOi5ExycIeKM9a83OJ4gr8VAd7q9UbQrtDJVqIcUQlL-NX7h9~u7hd~5A5Covrdvfy8Jcyq92cBhSCp1Z9kcATi6wUkrX6w~GXkew__',
		date: '8 дек в 12:32',
		text: 'Здравствуйте. Подскажите пожалуйста на рост 153 ог 75, от 57 подойдёт? Не велик будет? Не знаю какой размер выбрать.',
		replies: [
			{
				authorName: 'Оля',
				avaSrc:
					'https://s3-alpha-sig.figma.com/img/9698/fc14/a1402cba167c2f1484d22e299e913441?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XsYxISIo0ibVcQqOseCa8kCSCOdPfCO30fqAe9lD0gedKuYkgURTri2nlA6Af2QPie-RFI9VpnUOzawvcMmVlssw214axMBHe60GO2P6D3U9Uo2YeNkh4BwffBTavj1Emscb8ZDHX-gjaqEzkfg~B2YBDC6KWkFn9yQPrmimpOjy4AzP7gnHLDubqO6Omp8b9aGJs8PMtGgFA9iUyD8ZLZScwbp1KzbIfSO0wGZeDIsp7Rxm2Jk34Ny3ssErh8Dy5OA16H9DqVDdJmsoAXTPzvM0WQeVj~aTuNtw8-RDZqJquAZFCT84xZo9wfIzoRxzNaCEnvqEtS9goid-8OYADQ__',
				date: '8 дек в 12:32',
				text: 'Да, мне тоже очень понравился материал',
				pinned: true,
			},
			{
				authorName: 'Анна',
				avaSrc:
					'https://s3-alpha-sig.figma.com/img/bc12/40db/32f54acb4e96ab4e0ae6d6e200911627?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JBcdLzJPHpKpkG89T5UFu3lAHqhJ05t~FWVTUY-kBVl7efMNk94lofT9p7YObSTfv92wMQLd8nl0HQtFaaK-TPvt0RhjNUzgU1dn9Bo2r5cEojrkz4zWdf77Jmi6-hZqfMC9boMOS8U3tpP0z84IKPccHTVOIHKYCXFA037P-FuqKTv3P8l1pp1eKSIAEhrLDDKjf-Kh96ydC9HMXiH7sr~wm-BAmgMqMCs84WEQoXXanZC1yDAPXW2WJLtcPh5-~7KK-tx3x2Rfnr6kaoCLegr4syXSYv-6Mxvty34LiQpp6oWZFcMiPrmdF1k-~oY2NOHneVO~vYMjES0JfcIHBw__',
				date: '8 дек в 12:32',
				text: 'Да, мне тоже очень понравился материал',
				pinned: false,
			},
		],
	},
	{
		authorName: 'Name',
		date: '8 дек в 12:32',
		text: 'Здравствуйте. Подскажите пожалуйста на рост 153 ог 75, от 57 подойдёт? Не велик будет? Не знаю какой размер выбрать.',
		replies: [
			{
				authorName: 'Brand Name',
				date: '8 дек в 12:32',
				text: 'Да, мне тоже очень понравился материал',
				pinned: false,
			},
		],
	},
	{
		authorName: 'Егор Д.',
		date: '8 дек в 12:32',
		text: 'Здравствуйте. Подскажите, пожалуйста, на рост 180 см М подойдёт? Не велик будет? Не знаю какой размер выбрать.',
		replies: [],
	},
];

export const Questions = () => {
	return (
		<Flex vertical gap={36} align={'start'}>
			<QuestionInput />
			{data.map((item, i) => (
				<Comment comment={item} key={i} hasReplyButton />
			))}
			<ButtonBase
				iconRight={
					<div style={{width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
						<ArrowHead />
					</div>
				}
				buttonSize='medium'
			>
				Все вопросы
			</ButtonBase>
		</Flex>
	);
};
