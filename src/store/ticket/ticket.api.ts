import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const ticketApi = createApi({
	reducerPath: 'api/ticket',
	baseQuery: fetchBaseQuery({baseUrl: 'https://students.netoservices.ru/fe-diplom'}),
	endpoints: build => ({
		getTickets: build.query({query: () => '/last'})
	})
})

export const {useGetTicketsQuery} = ticketApi;