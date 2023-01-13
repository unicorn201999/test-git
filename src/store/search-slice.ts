import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./store"
import { IFilter } from "../models/filter"

interface CounterState {
  currentPage: number
  itemsCount: number
  filter: IFilter
}

const initialState: CounterState = {
  currentPage: 0,
  itemsCount: 0,
  filter: {} as IFilter,
}

export const counterSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setItemsCount: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setFilter: (state, action: PayloadAction<IFilter>) => {
      state.filter = action.payload
    },
  },
})

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.search.currentPage
export const itemsCount = (state: RootState) => state.search.itemsCount
export const filter = (state: RootState) => state.search.filter

export const { setFilter, setCurrentPage, setItemsCount } = counterSlice.actions

export default counterSlice.reducer
