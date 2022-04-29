import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const appointmentApi = createApi({
    reducerPath: "posts",
    baseQuery: fetchBaseQuery({
        baseUrl:"https://jsonplaceholder.typicode.com"
    }),
    endpoints: (builder) => ({
        getAppointments: builder.query({
            query:()=> `posts`
        })
    })
})

export const {useAppointmentsQuery} = appointmentApi;