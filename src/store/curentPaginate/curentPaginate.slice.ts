import {createSlice, PayloadAction} from '@reduxjs/toolkit';


const initialState = 1;

export const curentPaginateSlice = createSlice({
	name: 'curentPaginate',
	initialState,
	reducers: {
		addcurentPaginate: (state, action:PayloadAction<number>) => {
			state = action.payload
			return state
		}
	}
})

export const curentPaginateByReducer = curentPaginateSlice.reducer
export const curentPaginateByAction = curentPaginateSlice.actions