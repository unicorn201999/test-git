import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { detailApi } from "../services/detailApi"
import { searchApi } from "../services/searchApi"
import likeSlice from "./like-slice"
import searchSlice from "./search-slice"

const store = configureStore({
  reducer: {
    [searchApi.reducerPath]: searchApi.reducer,
    [detailApi.reducerPath]: detailApi.reducer,
    search: searchSlice,
    like: likeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchApi.middleware, detailApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
