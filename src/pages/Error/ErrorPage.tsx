import {Button, Result} from 'antd';
import {useNavigate} from 'react-router-dom';

export const ErrorPage = () => {
	const navigate = useNavigate();

	return (
		<Result
			status='error'
			title='Что-то пошло не так...'
			subTitle='Попробуйте обновить страницу или вернуться на главную страницу.'
			extra={[
				<Button type='primary' onClick={() => navigate('/')}>
					Вернуться на главную
				</Button>,
			]}
		></Result>
	);
};
