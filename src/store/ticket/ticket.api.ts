import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { ICyties } from '../../models/selectModel';

export const ticketApi = createApi({
	reducerPath: 'api/ticket',
	baseQuery: fetchBaseQuery({baseUrl: 'https://students.netoservices.ru/fe-diplom'}),
	endpoints: build => ({
		searchCities: build.query<ICyties[], string>({query: (i) => `/routes/cities?name=${i}`}),
		searchDirections: build.query<any, string>({query: (i) => `/routes/${i}`}),
		lastTickets: build.query<any, string>({query: (i) => `/routes/last`})
	})
})

export const {useLazySearchCitiesQuery, useSearchCitiesQuery,useSearchDirectionsQuery, useLastTicketsQuery, useLazySearchDirectionsQuery} = ticketApi;