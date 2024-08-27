export const toNumberFormat = (value: number): string => {
	const suffixes = ['', 'к', 'млн', 'млрд', 'трлн', 'квадр'];
	let suffixIndex = 0;
	let formattedNum: string;

	if (value < 1000) {
		formattedNum = value.toLocaleString('ru', {maximumFractionDigits: 2, minimumFractionDigits: 0, useGrouping: false});
	} else {
		while (Math.abs(value) >= 1000) {
			value /= 1000;
			suffixIndex++;
		}
		formattedNum = value.toLocaleString('ru', {maximumFractionDigits: 2, minimumFractionDigits: 0, useGrouping: false});
	}

	formattedNum = formattedNum.replace(/,?0+$/, '');

	const suffix = suffixes[suffixIndex];
	return formattedNum + suffix;
};
