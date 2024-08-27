import {Card, Typography} from 'antd';
import classes from './styles.module.scss';
import clsx from 'clsx';
import {Radio} from '../../ui/Radio/Radio';

interface Props {
	imgSrc?: string;
	width?: string | number;
	extraImgContent?: React.ReactNode;
	extraImgContentStyles?: React.CSSProperties;
	imgHeight?: string | number;
	title: string;
	value?: string | number;
}

export const SelectCardProduct = ({
	imgSrc,
	width = 156,
	extraImgContent,
	imgHeight = 156,
	extraImgContentStyles,
	value,
	title,
}: Props) => {
	return (
		<Card
			className={classes.selectCardProduct}
			cover={
				<div
					style={{
						width: width,
						height: imgHeight,
						boxSizing: 'border-box',
						background: imgSrc && `url(${imgSrc})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
					className={clsx(classes.imgWrapper, value === title && classes.selected, !imgSrc && classes.noImg)}
				>
					<Radio className={classes.radioWrapper} value={title}>
						<div style={{height: imgHeight}}>
							<div className={classes.extraImgContent} style={extraImgContentStyles}>
								{extraImgContent}
							</div>
						</div>
					</Radio>
				</div>
			}
			style={{width: width}}
		>
			<div className={classes.content}>
				<Typography.Paragraph className={classes.title} ellipsis={{rows: 2}}>
					{title}
				</Typography.Paragraph>
			</div>
		</Card>
	);
};
