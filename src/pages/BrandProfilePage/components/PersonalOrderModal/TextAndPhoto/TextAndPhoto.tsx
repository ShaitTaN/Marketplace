import {Flex, Typography} from 'antd';
import {ChangeEvent, useEffect, useState} from 'react';
import CameraIcon from '../../../../../assets/icons/camera.svg';
import CloseIcon from '../../../../../assets/icons/closeNeutral.svg';
import classes from './styles.module.scss';
import clsx from 'clsx';
import {Textarea} from '../../../../../ui/Textarea/Textarea';
import {Upload} from '../../../../../ui/Upload/Upload';

export const TextAndPhoto = () => {
	const [value, setValue] = useState('');
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const [disabledSelectedFile, setDisabledSelectedFile] = useState(false);

	const handleFileSelection = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			const filesArray = Array.from(event.target.files).filter(
				(file) => file.type === 'image/png' || file.type === 'image/jpeg'
			);
			setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]);
		}
	};

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
		setValue(event.target.value);
	};

	useEffect(() => {
		if (selectedFiles.length >= 5) {
			setDisabledSelectedFile(true);
		} else {
			setDisabledSelectedFile(false);
		}
	}, [selectedFiles]);

	return (
		<Flex vertical gap={16} className={classes.textAndPhoto}>
			<Typography.Text className={classes.requiredField}>
				<span>*</span> Опишите, какое изделие вы хотите, его материал, цвет и размеры:
			</Typography.Text>
			<Textarea autoSize={{minRows: 4, maxRows: 8}} value={value} onChange={handleChange} />
			<Flex gap={8} className={classes.imagesBlock}>
				{selectedFiles.map((file, index) => (
					<div key={index} className={classes.imageWrapper}>
						{URL.createObjectURL(file) ? (
							<img key={index} src={URL.createObjectURL(file)} alt={'image'} className={classes.image} />
						) : (
							<div key={index} className={classes.noImage} />
						)}
						<CloseIcon
							style={{cursor: 'pointer'}}
							onClick={() => setSelectedFiles(selectedFiles.filter((_, i) => i !== index))}
							width={24}
							height={24}
						/>
					</div>
				))}
			</Flex>
			<Upload
				title={
					<Flex vertical gap={4}>
						<Flex
							gap={4}
							align='center'
							className={clsx({[classes.upload]: true, [classes.disabled]: disabledSelectedFile})}
						>
							<CameraIcon />
							<Typography.Text className={classes.text}>Прикрепить изображение</Typography.Text>
						</Flex>
						<Typography.Text className={classes.description}>
							Вы можете загрузить до 5 изображений в формате JPG или PNG. Максимальный размер одного изображения — 5МБ.
						</Typography.Text>
					</Flex>
				}
				onChange={handleFileSelection}
				disabled={selectedFiles.length >= 5}
				accept='image/png, image/jpeg'
			/>
		</Flex>
	);
};
