import {createSlice, PayloadAction} from '@reduxjs/toolkit';


interface DefaultSeats {
	adultSeats: string 
	childrensPlaces: string 
	without_childrens_seats: boolean
}

interface ISeats extends DefaultSeats {}

const defaultSeats: DefaultSeats = {
  adultSeats: '0',
  childrensPlaces: '0',
  without_childrens_seats: false,
};

const initialState:ISeats[] = [defaultSeats];

export const seatsSlice = createSlice({
	name: 'seats',
	initialState,
	reducers: {
		addSeats: (state, action:PayloadAction<ISeats>) => {
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

export const seatsReducer = seatsSlice.reducer
export const seatsAction = seatsSlice.actions