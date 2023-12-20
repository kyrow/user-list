import type { ColumnsType } from 'antd/es/table';

interface DataType {
	key: React.Key;
	_id: number;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	search?: string;
}

export const fieldsTitle: ColumnsType<DataType> = [
	{
		key: 'id',
		title: 'id',
		dataIndex: '_id',
		width: '10%',
		sorter: (a, b) => a._id - b._id,
	},
	{
		key: 'firstName',
		title: 'firstName',
		dataIndex: 'firstName',
		width: '20%',
		sorter: (a, b) => a.firstName.charAt(0).localeCompare(b.firstName.charAt(0)),
	},
	{
		key: 'lastName',
		title: 'lastName',
		dataIndex: 'lastName',
		width: '25%',
		sorter: (a, b) => a.lastName.charAt(0).localeCompare(b.lastName.charAt(0)),
	},
	{
		key: 'email',
		title: 'email',
		dataIndex: 'email',
		width: '25%',
		sorter: (a, b) => a.email.charAt(0).localeCompare(b.email.charAt(0)),
	},
	{
		key: 'phone',
		title: 'phone',
		dataIndex: 'phone',
		width: '20%',
		sorter: (a, b) => {
			const phoneA = a.phone.replace(/\D/g, '');
			const phoneB = b.phone.replace(/\D/g, '');
			return phoneA.localeCompare(phoneB);
		},
	},
];