import {Flex} from 'antd';
import {Avatar} from '../../ui/Avatar/Avatar';
import {Input} from '../../ui/Input/Input';

interface Props {
	onChange: (value: string) => void;
	value: string;
	onClickCancel?: () => void;
	onClickSubmit?: () => void;
}

export const ReplyField = ({onClickCancel, onClickSubmit, onChange, value}: Props) => {
	return (
		<Flex gap={16} style={{width: '100%'}}>
			<Avatar avatarType='not-bordered' avatarSize='small' />
			<Input.TextArea
				placeholder='Добавьте ответ...'
				autoSize
				withButtons
				style={{marginTop: '2px'}}
				onClickCancel={onClickCancel}
				onClickSubmit={onClickSubmit}
				onChange={(e) => onChange(e.target.value)}
				value={value}
			/>
		</Flex>
	);
};
