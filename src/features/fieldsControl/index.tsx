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
	},
	{
		key: 'firstName',
		title: 'firstName',
		dataIndex: 'firstName',
		width: '20%',
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

