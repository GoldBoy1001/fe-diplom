import {configureStore} from '@reduxjs/toolkit';
import { ticketApi } from './ticket/ticket.api';
import { showByReducer } from './showBy/showBy.slice';


export const store = configureStore({
reducer: {[ticketApi.reducerPath]: ticketApi.reducer,
	showBy: showByReducer},
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ticketApi.middleware),
})

export type TypeRootState = ReturnType<typeof store.getState>