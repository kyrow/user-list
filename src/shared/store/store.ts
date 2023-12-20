import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userListReducer from './slices/usersList-slice'

const rootReducer = combineReducers({
	userListReducer,
})

const store = configureStore({
	reducer: rootReducer,
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch