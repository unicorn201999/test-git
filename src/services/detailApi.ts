import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IDetail } from "../models/detail"

// Define a service using a base URL and expected endpoints
export const detailApi = createApi({
  reducerPath: "detailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://steam2.p.rapidapi.com/appDetail/",
    headers: {
      "X-RapidAPI-Key": "d920224981mshfc1663674d29fe5p1291cdjsnf0820a45d5c6",
      "X-RapidAPI-Host": "steam2.p.rapidapi.com",
    },
  }),
  endpoints: (builder) => ({
    getDetailById: builder.query<IDetail, { id: string }>({
      query: ({ id }) => `${id}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDetailByIdQuery } = detailApi
