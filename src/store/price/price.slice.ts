import {createSlice, PayloadAction} from '@reduxjs/toolkit';


const initialState:number[] = [];

export const priceSlice = createSlice({
	name: 'price',
	initialState,
	reducers: {
		addPrice: (state, action:PayloadAction<number[]>) => {
			state = [...action.payload]
			return state
		}
	}
})

export const priceReducer = priceSlice.reducer
export const priceAction = priceSlice.actions