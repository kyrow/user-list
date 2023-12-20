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

	},
	extraReducers: (builder) => {
		builder.addCase(getUserList.fulfilled, (state, action) => {
			state.users = action.payload
		})
	},
})

// export const { } = userListSlice.actions
export default userListSlice.reducer