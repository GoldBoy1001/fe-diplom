import {configureStore} from '@reduxjs/toolkit';
import { ticketApi } from './ticket/ticket.api';
import { showByReducer } from './showBy/showBy.slice';
import { cityReducer } from './city/cyty.slice';
import { curentPaginateByReducer } from './curentPaginate/curentPaginate.slice';
import { sortByReducer } from './sort/sort.slice';
import { extrasByReducer } from './extras/extras.slice';
import { priceReducer } from './price/price.slice';
import { timeReducer } from './time/time.slice';
import { choiceOfPlaceByReducer } from './choiceOfPlace/choiceOfPlace.slice';
import { directionReducer } from './direction/direction.slice';

export const store = configureStore({
reducer: {[ticketApi.reducerPath]: ticketApi.reducer,
	showBy: showByReducer,
	city: cityReducer,
	curentPaginate: curentPaginateByReducer,
	sort: sortByReducer,
	extras:extrasByReducer,
	price:priceReducer,
	time:timeReducer,
	choiceOfPlace:choiceOfPlaceByReducer,
	direction:directionReducer
},
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ticketApi.middleware),
})

export type TypeRootState = ReturnType<typeof store.getState>