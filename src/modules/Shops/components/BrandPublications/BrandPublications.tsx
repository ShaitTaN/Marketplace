import {useEffect} from 'react';
import {PublishCard} from '../../../../components/PublishCard/components/PublishCard/PublishCard';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';
import {usePublications} from '../../store/publications/usePublications';
import {
	selectGetPublications,
	selectIsLoading,
	selectPublications,
} from '../../store/publications/usePublications.selectors';
import {Flex, Spin} from 'antd';
import classes from './styles.module.scss';

interface Props {
	brandId: string;
}

export const BrandPublications = ({brandId}: Props) => {
	const publications = usePublications(selectPublications);
	const isLoading = usePublications(selectIsLoading);
	const getPublications = usePublications(selectGetPublications);

	useEffect(() => {
		getPublications(brandId);
	}, [getPublications, brandId]);

	return (
		<div style={{marginTop: publications.length ? '12px' : '-22px'}}>
			{!publications.length && (
				<div className={classes.empty}>
					{isLoading && <Spin size='large' />}
					{!isLoading && 'Здесь будут отображаться публикации бренда'}
				</div>
			)}

			{!!publications.length && (
				<Flex gap={10} className={classes.grid}>
					{publications.map((item, index) => (
						<PublishCard
							key={index}
							rows={4}
							shortened={true}
							imgSrc={item.picturesList[0]?.filePath}
							cardText={item.description}
							likesCount={item.likes?.acquire}
							commentsCount={item.amountComments}
							hasAddToArchive
							btnRedirectToProduct={
								<ButtonBase buttonType='secondary' buttonSize='normal' onClick={(e) => e.stopPropagation()}>
									К изделию
								</ButtonBase>
							}
						/>
					))}
				</Flex>
			)}
		</div>
	);
};
