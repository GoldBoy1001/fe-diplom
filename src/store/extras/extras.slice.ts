import {createSlice, PayloadAction} from '@reduxjs/toolkit';


export interface IExtras {
	have_first_class: boolean;
	have_second_class: boolean;
	have_third_class: boolean;
	have_fourth_class: boolean;
	have_wifi: boolean;
	have_air_conditioning: boolean;
	is_express: boolean;
}

const initialState:IExtras = {
	have_first_class: false,
	have_second_class: false,
	have_third_class: false,
	have_fourth_class: false,
	have_wifi: false,
	have_air_conditioning: false,
	is_express: false
};

export const extrasSlice = createSlice({
	name: 'extras',
	initialState,
	reducers: {
		addFirstClass: (state, action:PayloadAction<boolean>) => {
			state.have_first_class = action.payload
			return state
		},
		addSecondClass: (state, action:PayloadAction<boolean>) => {
			state.have_second_class = action.payload
			return state
		},
		addThirdClass: (state, action:PayloadAction<boolean>) => {
			state.have_third_class = action.payload
			return state
		},
		addFourthClass: (state, action:PayloadAction<boolean>) => {
			state.have_fourth_class = action.payload
			return state
		},
		addWifi: (state, action:PayloadAction<boolean>) => {
			state.have_wifi = action.payload
			return state
		},
		addConditioning: (state, action:PayloadAction<boolean>) => {
			state.have_air_conditioning = action.payload
			return state
		},
		addExpress: (state, action:PayloadAction<boolean>) => {
			state.is_express = action.payload
			return state
		}
	}
})

export const extrasByReducer = extrasSlice.reducer
export const extrasByAction = extrasSlice.actions