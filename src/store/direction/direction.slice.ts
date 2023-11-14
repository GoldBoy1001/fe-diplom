import {createSlice, PayloadAction} from '@reduxjs/toolkit';


interface IDirection {
	train: string;
	station: string
}

const initialState:IDirection[] = [];

export const directionSlice = createSlice({
	name: 'direction',
	initialState,
	reducers: {
		addDirection: (state, action:PayloadAction<IDirection>) => {
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

export const directionReducer = directionSlice.reducer
export const directionAction = directionSlice.actions