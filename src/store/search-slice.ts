import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./store"
import { IFilter } from "../models/filter"

interface CounterState {
  filter: IFilter
}

const initialState: CounterState = {
  filter: {} as IFilter,
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<IFilter>) => {
      state.filter = action.payload
    },
  },
})

// Other code such as selectors can use the imported `RootState` type
export const filterSelector = (state: RootState) => state.search.filter

export const { setFilter } = searchSlice.actions

export default searchSlice.reducer
