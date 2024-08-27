import {useState} from 'react';
import classes from './styles.module.scss';
import clsx from 'clsx';

interface Props {
	rowHeaders: string[];
	data: Record<string, string>[];
}

export const Table = ({rowHeaders, data}: Props) => {
	const [selectedCell, setSelectedCell] = useState('');

	const onMouseMove = (e: React.MouseEvent<HTMLTableElement, MouseEvent>) => {
		const target = e.target as HTMLElement;

		if (!target.id) {
			setSelectedCell('');
			return;
		}

		setSelectedCell(target.id);
	};

	const onMouseLeave = () => {
		setSelectedCell('');
	};

	const columnKeys = Object.keys(data[0]);

	return (
		<table className={classes.table} border={1} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
			<tbody>
				{rowHeaders.map((header, index) => (
					<tr key={header} className={classes.row}>
						<th className={classes.head}>{header}</th>
						{data.map((cell, colIndex) => (
							<td
								key={cell.ru}
								className={clsx({
									[classes.cell]: true,
									// Выделить ячейки которые находятся в том же столбце или строке как выбранная ячейка
									[classes.active]: selectedCell.includes(`row-${index}`) || selectedCell.includes(`col-${colIndex}`),
									// Выделить выбранную ячейку
									[classes.selected]: selectedCell.includes(`row-${index}`) && selectedCell.includes(`col-${colIndex}`),
								})}
								id={`row-${index} col-${colIndex}`}
							>
								{cell[columnKeys[index]]}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};
