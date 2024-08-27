import {Button, Result} from 'antd';
import {useNavigate} from 'react-router-dom';

export const ForbiddenPage = () => {
	const navigate = useNavigate();

	return (
		<Result
			status='404'
			title='404'
			subTitle='Извините, страница не существует.'
			extra={
				<Button type='primary' onClick={() => navigate('/')}>
					Вернуться на главную
				</Button>
			}
		/>
	);
};
