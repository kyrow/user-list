import { createSlice } from "@reduxjs/toolkit";
import { IUserList } from "./types";
import { getUserList } from "./getUserList";

const initialState: IUserList = {
	users: []
}

const userListSlice = createSlice({
	name: 'userList',
	initialState,
	reducers: {
		searchUser: (state, action) => {
			state.users = state.users.filter(user =>
				user.firstName.toLowerCase().includes(action.payload) ||
				user.lastName.toLowerCase().includes(action.payload) ||
				user.email.toLowerCase().includes(action.payload) ||
				user.phone.includes(action.payload)
			);
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getUserList.fulfilled, (state, action) => {
			state.users = action.payload
		})
	},
})

export const { searchUser } = userListSlice.actions
export default userListSlice.reducer