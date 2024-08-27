import {Header as HeaderAntd} from 'antd/es/layout/layout';
import {HeaderInfo} from '../HeaderInfo/HeaderInfo';
import classes from './styles.module.scss';
import {HeaderNavigation} from '../HeaderNavigation/HeaderNavigation';
import {Wrapper} from '../../../../ui/Wrapper/Wrapper';

export const Header = () => {
	return (
		<HeaderAntd className={classes.header}>
			<Wrapper vertical>
				<HeaderInfo />
				<HeaderNavigation />
			</Wrapper>
			<div style={{position: 'absolute', background: 'red'}}></div>
		</HeaderAntd>
	);
};
