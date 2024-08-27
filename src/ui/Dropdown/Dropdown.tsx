import classes from './styles.module.scss';
import {Dropdown as AntDropdown, DropDownProps} from 'antd';
import DotsIcon from '../../assets/icons/dots.svg';

export const Dropdown = ({trigger, placement, menu, ...props}: DropDownProps) => {
	return (
		<div style={{display: 'flex'}}>
			<AntDropdown
				overlayClassName={classes.dropdown}
				{...props}
				trigger={trigger}
				placement={placement}
				menu={menu}
				arrow={false}
			>
				<DotsIcon style={{cursor: 'pointer'}} />
			</AntDropdown>
		</div>
	);
};
