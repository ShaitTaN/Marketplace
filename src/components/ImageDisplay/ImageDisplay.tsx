import {useState, useEffect} from 'react';
import {Flex, Spin} from 'antd';
import classes from './styles.module.scss';
import ky from 'ky';

interface ImageDisplayProps {
	url: string;
	classNameImg?: string;
	classNameGrayDiv?: string;
	styleImg?: React.CSSProperties;
}

export const ImageDisplay = ({url, classNameImg, classNameGrayDiv, styleImg}: ImageDisplayProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isValidUrl, setIsValidUrl] = useState<boolean>(false);

	useEffect(() => {
		const checkImageUrl = async () => {
			try {
				const response = await ky.head(url);
				const contentType = response.headers.get('content-type');

				setIsValidUrl(contentType?.startsWith('image/') ?? false);
			} catch (error) {
				setIsValidUrl(false);
			} finally {
				setIsLoading(false);
			}
		};

		if (url) {
			checkImageUrl();
		} else {
			setIsLoading(false);
		}
	}, [url]);

	return (
		<div className={classes.imgWrapper}>
			{isLoading ? (
				<Flex style={{width: '100%', height: '100%'}} align='center' justify='center'>
					<Spin size='large' />
				</Flex>
			) : isValidUrl ? (
				<img src={url} className={classNameImg ? classNameImg : classes.img} alt='Image' style={styleImg} />
			) : (
				<div className={classNameGrayDiv ? classNameGrayDiv : classes.grayDiv} style={styleImg} />
			)}
		</div>
	);
};
