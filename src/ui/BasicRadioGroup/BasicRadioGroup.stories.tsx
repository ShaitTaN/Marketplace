import {StoryObj} from '@storybook/react';
import {BasicRadioGroup} from './BasicRadioGroup';
import {BasicRadio} from '../BasicRadio/BasicRadio';
import {useArgs} from '@storybook/preview-api';
import {RadioChangeEvent} from 'antd';
import {SbWrapper} from '../SbWrapper/SbWrapper';

export default {
	title: 'UI/BasicRadioGroup',
	component: BasicRadioGroup,
};

type Props = StoryObj<typeof BasicRadioGroup>;

const radioButtons = [
	{label: 'Вопрос или ответ не по теме изделия', value: 'Вопрос или ответ не по теме изделия'},
	{label: 'Нецензурная лексика', value: 'Нецензурная лексика'},
	{label: 'Спам', value: 'Спам'},
	{label: 'Другое', value: 'Другое'},
];

export const BasicRadioGroupUI: Props = {
	args: {
		value: 'Спам',
		name: 'name',
	},
	render: (args) => {
		const [{value}, updateArgs] = useArgs();
		const onChange = (e: RadioChangeEvent) => {
			updateArgs({value: e.target.value});
		};
		return (
			<SbWrapper>
				<BasicRadioGroup value={value} onChange={(e) => onChange(e)} {...args}>
					{radioButtons.map((item, index) => (
						<BasicRadio key={index} value={item.value}>
							{item.value}
						</BasicRadio>
					))}
				</BasicRadioGroup>
			</SbWrapper>
		);
	},
};
