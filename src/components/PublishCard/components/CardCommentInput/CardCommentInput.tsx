import {Flex} from 'antd';
import {Avatar} from '../../../../ui/Avatar/Avatar';
import {Input} from '../../../../ui/Input/Input';
import {ButtonBase} from '../../../../ui/Button/ButtonBase';

export const CardCommentInput = ({value, setValue}: {value: string; setValue: (value: string) => void}) => {
	return (
		<Flex vertical gap={12}>
			<Flex gap={16}>
				<Avatar avatarType='not-bordered' avatarSize='small' />
				<Input.TextArea
					placeholder='Написать комментарий...'
					maxLength={280}
					autoSize={{maxRows: 6}}
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</Flex>
			{value && (
				<Flex gap={8} justify='flex-end'>
					<ButtonBase onClick={() => setValue('')} buttonSize='small' buttonType='secondary'>
						Отменить
					</ButtonBase>
					<ButtonBase buttonSize='small'>Отправить</ButtonBase>
				</Flex>
			)}
		</Flex>
	);
};
