import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPersonalData {
	first_name: string
	last_name: string
	patronymic: string
	phone: string
	email: string,
	payment_method: string
}

const initialState: IPersonalData[] = [];

export const personalDataSlice = createSlice({
  name: 'personalData',
  initialState,
  reducers: {
    addPersonalData: (state, action: PayloadAction<IPersonalData>) => {
		if (state.length > 0) {
			// Удаляем объект с нулевой позиции
			state.shift();
		 }
		 // Добавляем объект на нулевую позицию
		 state.unshift(action.payload);
		 return state
    }
  },
});

export const personalDataReducer = personalDataSlice.reducer;
export const personalDataAction = personalDataSlice.actions;

