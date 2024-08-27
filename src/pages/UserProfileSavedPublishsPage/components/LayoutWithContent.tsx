import {Publication} from '../../../app/models/Publication';
import {PublicationItems} from '../../../modules/Publications/components/PublicationItems/PublicationItems';
import classes from '../styles.module.scss';

interface Props {
	publishesData: Publication[];
}

export const LayoutWithContent = ({publishesData}: Props) => {
	return (
		<div className={classes.publishesWrapperWithContent}>
			<PublicationItems width={'100%'} publishesData={publishesData} imgHeight={361} />
		</div>
	);
};
