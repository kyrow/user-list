interface ISingleUser {
	key: React.Key;
	_id: number;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
}

export interface IUserList {
	users: ISingleUser[]
}