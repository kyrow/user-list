interface DataType {
	key: React.Key;
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
}

export const fieldsData: DataType[] = [];
for (let i = 0; i < 100; i++) {
	fieldsData.push({
		key: `test ${i}`,
		id: `${i + 1}`,
		firstName: 'Ethan',
		lastName: `Majors ${i}`,
		email: 'etham@mdas.ss',
		phone: '+8(321)392-12-12'
	});
}
