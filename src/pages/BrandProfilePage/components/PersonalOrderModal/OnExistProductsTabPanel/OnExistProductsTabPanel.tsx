import {Flex, Typography} from 'antd';
import ArrowRightIcon from '../../../../../assets/icons/arrowSmall.svg';
import classes from './styles.module.scss';
import {TextAndPhoto} from '../TextAndPhoto/TextAndPhoto';
import {useState} from 'react';
import {ButtonBase} from '../../../../../ui/Button/ButtonBase';
import {SelectCardPanel} from './SelectCardPanel/SelectCardPanel';

export const OnExistProductsTabPanel = () => {
	const [showSelectProductPanel, setShowSelectProductPanel] = useState(false);
	return (
		<Flex vertical gap={24} className={classes.onExistProductsTabPanel}>
			<Flex vertical gap={16}>
				<Flex gap={16} align='center'>
					<Typography.Text className={classes.requiredField}>
						<span>*</span> Выберите изделие:
					</Typography.Text>
					<ButtonBase
						buttonType='secondary'
						iconRight={
							<ArrowRightIcon style={{transform: showSelectProductPanel ? 'rotate(180deg)' : 'rotate(0deg)'}} />
						}
						onClick={() => setShowSelectProductPanel(!showSelectProductPanel)}
					>
						Выбрать
					</ButtonBase>
				</Flex>
				<SelectCardPanel show={showSelectProductPanel} />
			</Flex>
			<TextAndPhoto />
		</Flex>
	);
};
