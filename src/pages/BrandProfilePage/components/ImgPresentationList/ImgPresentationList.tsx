import classes from './styles.module.scss';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';
import ArrowSmall from '../../../../assets/icons/arrowSmall.svg';
import clsx from 'clsx';
import {useState} from 'react';
import {ImageDisplay} from '../../../../components/ImageDisplay/ImageDisplay';

export const ImgPresentationList = () => {
	const [expand, setExpand] = useState(false);
	return (
		<div className={classes.container}>
			<div className={classes.button}>
				<ButtonBase
					onClick={() => setExpand(!expand)}
					buttonType='tertiary'
					buttonSize='medium'
					iconRight={
						<ArrowSmall width={24} height={24} style={{transform: expand ? 'rotate(180deg)' : 'rotate(0deg)'}} />
					}
				>
					{expand ? 'Свернуть' : 'О бренде'}
				</ButtonBase>
			</div>
			<div
				className={clsx({
					[classes.imgBlock]: true,
					[classes.expanded]: expand,
				})}
			>
				<ImageDisplay
					classNameImg={classes.img}
					url='https://s3-alpha-sig.figma.com/img/566f/3ada/ce16bb758bb147c100216d3f4e703d5c?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QqCpAdBOOG4VbLEIEqc0gVMBtmtucqMryPtZQLti0tuDyO7KQxCGazW2JO-uxsNfFp3LPkk6c2~Qi5pFSSS8yNohVgDxpeJmfPE4Ah~4TDaHTAr8jCF714piWWPHIsJY2VzvWhSE8syLwzKvd5YKVoqR3DtjfJCgAEqqE9pTitSYVLKoIZYFpnb-3EZFiEc9tn-WPQOidl-xn8YXN2IbhvCqtfvj6kKrL2lq2d60oPJOQgxd9XUvNlgANjRNKe-njSsQ6wNgvB~uVcpdWxfUxoVDHD2FdYAlRTyiWMCQQNq-iOf9rYyTewueXMMBBrrC1nD4bQodGAdlpLmR8pCUqQ__'
				/>
			</div>
		</div>
	);
};
