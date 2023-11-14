import {createSlice, PayloadAction} from '@reduxjs/toolkit';


const initialState = '';

export const sortSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		addSortItem: (state, action:PayloadAction<string>) => {
			state = action.payload
			return state
		}
	}
})

export const sortByReducer = sortSlice.reducer
export const sortByAction = sortSlice.actions