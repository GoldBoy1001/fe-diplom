import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICity, IDate} from '../../models/selectModel'

export interface IId{
	id1:string;
	id2: string
}
 
const Date_KEY = 'datek';
const initialState: (ICity | IDate | IId)[] = [
	...JSON.parse(localStorage.getItem(Date_KEY) ?? '[]')
]

export const citySlice = createSlice({
	name: 'city',
	initialState,
	reducers: {
		addCity: (state, action:PayloadAction<ICity>) => {
			if (state.length > 0) {
				// Удаляем объект с нулевой позиции
				state.shift();
				localStorage.setItem(Date_KEY, JSON.stringify(state))
			 }
			 // Добавляем объект с city1 и city2 на нулевую позицию
			 state.unshift(action.payload);
			 localStorage.setItem(Date_KEY, JSON.stringify(state))
			 return state
		},
		addDate: (state, action:PayloadAction<IDate>) => {
			if (state.length > 1) {
				// Удаляем объект с первой позиции
				state.splice(1, 1);
				localStorage.setItem(Date_KEY, JSON.stringify(state))
			 }
			 // Добавляем объект с date1 и date2 на первую позицию
			 state.splice(1, 0, action.payload);
			 localStorage.setItem(Date_KEY, JSON.stringify(state))
		},
		addId: (state, action:PayloadAction<IId>) => {
			if (state.length > 2) {
				// Удаляем объект с первой позиции
				state.splice(2, 1);
				localStorage.setItem(Date_KEY, JSON.stringify(state))
			 }
			 // Добавляем объект с date1 и date2 на первую позицию
			 state.splice(2, 0, action.payload );
			 localStorage.setItem(Date_KEY, JSON.stringify(state))
		}
	}
})

export const cityReducer = citySlice.reducer
export const cityAction = citySlice.actions