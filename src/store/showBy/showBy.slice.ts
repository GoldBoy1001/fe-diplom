import {createSlice, PayloadAction} from '@reduxjs/toolkit';


const initialState = 5;

export const showBySlice = createSlice({
	name: 'showBy',
	initialState,
	reducers: {
		addNumber: (state, action:PayloadAction<number>) => {
			state = action.payload
			return state
		}
	}
})

export const showByReducer = showBySlice.reducer
export const showByAction = showBySlice.actions