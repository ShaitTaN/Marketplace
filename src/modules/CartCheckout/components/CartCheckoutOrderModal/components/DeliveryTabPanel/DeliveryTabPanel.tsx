import {Flex, Typography} from 'antd';
import classes from './styles.module.scss';
import {useState} from 'react';
import {Radio as RadioAntd} from 'antd';
import {Input} from '../../../../../../ui/Input/Input';
import {Radio} from '../../../../../../ui/Radio/Radio';
import {ButtonBase} from '../../../../../../ui/Button/ButtonBase';
import {InputSearch} from '../../../../../../ui/Input/InputSearch';

const data = [{label: 'Мячковский б-р, 18к1'}, {label: 'ш. Энтузиастов, 7с1'}];

export const DeliveryTabPanel = () => {
	const [value, setValue] = useState('');
	const [isSelectedPoint, setIsSelectedPoint] = useState(false);
	return (
		<Flex vertical gap={16} className={classes.wrapper}>
			<Flex vertical gap={8}>
				<Typography.Text className={classes.title} style={{marginBottom: '8px'}}>
					Адрес
				</Typography.Text>
				<InputSearch
					setIsSelectedPoint={setIsSelectedPoint}
					value={value}
					setValue={setValue}
					data={data}
					placeholder='Улица, дом'
					inputSize='normal'
				/>
				<Flex gap={8}>
					<Input inputSize='normal' placeholder='Квартира' />
					<Input inputSize='normal' placeholder='Подъезд' />
				</Flex>
				<Flex gap={8}>
					<Input inputSize='normal' placeholder='Этаж' />
					<Input inputSize='normal' placeholder='Домофон' />
				</Flex>
				<Input.TextArea autoSize={{minRows: 6, maxRows: 8}} placeholder='Комментарий для курьера' />
			</Flex>
			<Flex vertical gap={16}>
				<Typography.Text className={classes.title}>Курьерская служба</Typography.Text>
				{isSelectedPoint ? (
					<>
						<RadioAntd.Group className={classes.radioGroup} defaultValue={'Yandex'}>
							<Radio value={'Yandex'}>
								<Flex vertical gap={4}>
									<Typography.Text className={classes.text}>
										Яндекс Доставка, 1 час, <strong>600₽</strong>
									</Typography.Text>
									<Typography.Text className={classes.description}>
										Курьер заберёт заказ у продавца и доставит вам в течение 4-х часов
									</Typography.Text>
								</Flex>
							</Radio>
							<Radio value={'Dostavista'}>
								<Flex vertical gap={4}>
									<Typography.Text className={classes.text}>
										Достависта, 1 — 4 часа, <strong>500₽</strong>
									</Typography.Text>
									<Typography.Text className={classes.description}>
										Курьер доставит заказ ко времени, которые вы выберете после оплаты
									</Typography.Text>
								</Flex>
							</Radio>
						</RadioAntd.Group>
						<ButtonBase buttonSize='medium' style={{marginTop: '8px'}}>
							Продолжить
						</ButtonBase>
					</>
				) : (
					<Typography.Text>Сначала укажите адрес</Typography.Text>
				)}
			</Flex>
		</Flex>
	);
};
