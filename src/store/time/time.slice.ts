import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ITimeThere{
	startDepartureHourFrom: number;
	startDepartureHourTo: number;
	startArrivalHourFrom: number;
	startArrivalHourTo: number
}
export interface ITimeBack{
	endDepartureHourFrom: number;
	endDepartureHourTo: number;
	endArrivalHourFrom: number;
	endArrivalHourTo: number
}

const initialState:(ITimeThere | ITimeBack)[] = [];

export const timeSlice = createSlice({
	name: 'time',
	initialState,
	reducers: {
		addTimeThere: (state, action:PayloadAction<ITimeThere>) => {
			if (state.length > 0) {
				// Удаляем объект с нулевой позиции
				state.shift();
			 }
			 // Добавляем объект на нулевую позицию
			 state.unshift(action.payload);
			 return state
		},
		addTimeBack: (state, action:PayloadAction< ITimeBack>) => {
			if (state.length > 1) {
				// Удаляем объект с первой позиции
				state.splice(1, 1);
			 }
			 // Добавляем объект с date1 и date2 на первую позицию
			 state.splice(1, 0, action.payload);
			 return state
		}
	}
})

export const timeReducer = timeSlice.reducer
export const timeAction = timeSlice.actions