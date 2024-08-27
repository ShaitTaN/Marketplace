import {Popover as AntdPopover, PopoverProps} from 'antd';
import classes from './styles.module.scss';
import clsx from 'clsx';

interface Props extends PopoverProps {
	withoutBorder?: boolean;
}

export const Popover = ({withoutBorder = false, className, children, ...props}: Props) => {
	return (
		<div className={className}>
			<AntdPopover rootClassName={clsx(classes.popover, withoutBorder && classes.withoutBorder)} {...props}>
				{children}
			</AntdPopover>
		</div>
	);
};
