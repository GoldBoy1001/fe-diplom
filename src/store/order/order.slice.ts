import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IDetail {
  last_name: string;
  name: string;
  patronymic: string;
  limited_mobility?: boolean;
  is_adult?: boolean;
  gender: string
  birthday: string;
  document_type?: string;
  document_data?: string;
  document_dataSeries?: string;
  is_child?: boolean;
  include_children_seat?: boolean;
  num:number
}

const initialState: IDetail[] = [];

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addDetail: (state, action: PayloadAction<IDetail[]>) => {
		if (!action.payload || action.payload.length === 0 || typeof action.payload[0].num !== 'number') {
			// If payload is undefined, empty, or doesn't have the expected structure, return the current state
			return state;
		 }
      // Создаем копию текущего массива состояния
      const currentState = state.slice();
      // Добавляем новые объекты в массив
      currentState.push(...action.payload);
		const newState = [...currentState.slice(- action.payload[0].num)];
      // Обновляем состояние
      return newState;
    }
  },
});

export const orderReducer = orderSlice.reducer;
export const orderAction = orderSlice.actions;

