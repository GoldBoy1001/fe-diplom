import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IChoceOfPlace } from '../../models/choiceModel';


const initialState: IChoceOfPlace[] = [];

export const choiceOfPlaceSlice = createSlice({
	name: 'choiceOfPlace',
	initialState,
	reducers: {
		addChoiceOfPlace: (state, action:PayloadAction<IChoceOfPlace>) => {
			if (state.length > 0) {
				// Удаляем объект с нулевой позиции
				state.shift();
			 }
			 // Добавляем объект с city1 и city2 на нулевую позицию
			 state.unshift(action.payload);
			 return state
		}
	}
})

export const choiceOfPlaceByReducer = choiceOfPlaceSlice.reducer
export const choiceOfPlaceByAction = choiceOfPlaceSlice.actions