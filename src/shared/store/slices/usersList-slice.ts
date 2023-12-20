import { createSlice } from "@reduxjs/toolkit";
import { ISingleUser, IUserList } from "./types";
import { getUserList } from "./getUserList";

const initialState: IUserList = {
	users: [],
	defaultUsersList: [],
	selectedPage: 1
}

const userListSlice = createSlice({
	name: 'userList',
	initialState,
	reducers: {
		searchUser: (state, action) => {
			state.users = state.defaultUsersList.filter(user =>
				user.firstName.toLowerCase().includes(action.payload) ||
				user.lastName.toLowerCase().includes(action.payload) ||
				user.email.toLowerCase().includes(action.payload) ||
				user.phone.includes(action.payload)
			);
		},
		changePage: (state, action) => {
			state.selectedPage = action.payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getUserList.fulfilled, (state, action) => {
			state.users = action.payload.map((user: ISingleUser, index: number) => ({
				...user,
				key: Math.random() + index
			}));
			state.defaultUsersList = state.users
		});
	},
})

export const { searchUser, changePage } = userListSlice.actions
export default userListSlice.reducer