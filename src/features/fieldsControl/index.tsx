import type { ColumnsType } from 'antd/es/table';

interface DataType {
	key: React.Key;
	id: string;
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
		dataIndex: 'id',
		width: '5%',
	},
	{
		key: 'firstName',
		title: 'firstName',
		dataIndex: 'firstName',
		width: '25%',
	},
	{
		key: 'lastName',
		title: 'lastName',
		dataIndex: 'lastName',
		width: '25%',
	},
	{
		key: 'email',
		title: 'email',
		dataIndex: 'email',
		width: '25%',
	},
	{
		key: 'phone',
		title: 'phone',
		dataIndex: 'phone',
		width: '20%',
	},
];

