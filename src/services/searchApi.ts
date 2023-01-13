import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IGameItem } from "../models/gameItem"

// Define a service using a base URL and expected endpoints
export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://steam2.p.rapidapi.com/search/",
    headers: {
      "X-RapidAPI-Key": "d920224981mshfc1663674d29fe5p1291cdjsnf0820a45d5c6",
      "X-RapidAPI-Host": "steam2.p.rapidapi.com",
    },
  }),
  endpoints: (builder) => ({
    // getGamesByName: builder.query<IGameItem[], { name: string; page: number }>({
    // query: ({ name, page }) => `${name}/page/${page}`,
    //this API does not provide the number of pages or elements, so only elements from the first page are used for correct pagination
    getGamesByName: builder.query<IGameItem[], { name: string }>({
      query: ({ name }) => `${name}/page/1`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGamesByNameQuery } = searchApi
