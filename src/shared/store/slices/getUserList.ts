import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/http';


export const getUserList = createAsyncThunk(
	'getUserList',
	async () => {
		try {
			const response = await api.get('/api/users');
			return response.data;
		} catch (error) {
			console.warn(error);
		}
	})