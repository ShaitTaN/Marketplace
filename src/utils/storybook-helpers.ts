export const OcticonArgType = (iconList: React.ReactNode[]) => {
	const icons = iconList.reduce<Record<string, React.ReactNode>>((obj, icon, index) => {
		obj[`Icon${index + 1}`] = icon;
		return obj;
	}, {});

	return {
		options: Object.keys(icons),
		control: {
			type: 'select',
		},
		mapping: icons,
	};
};
