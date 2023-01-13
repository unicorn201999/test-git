import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { IGameItem } from "../models/gameItem"
import { LIKED_GAMES } from "../pages/LikesPage"
import { RootState } from "./store"

interface CounterState {
  likedGames: IGameItem[]
  gamesId: string[]
}

const initialState: CounterState = {
  likedGames: [],
  gamesId: [],
}

export const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    setGamesList: (state, action: PayloadAction<IGameItem[]>) => {
      state.likedGames = action.payload
    },
    addGame: (state, action: PayloadAction<IGameItem>) => {
      state.likedGames.push(action.payload)
      localStorage.setItem(LIKED_GAMES, JSON.stringify(state.likedGames))
    },
    removeGame: (state, action: PayloadAction<string>) => {
      state.likedGames = state.likedGames.filter(
        (game) => game.appId !== action.payload
      )
      localStorage.setItem(LIKED_GAMES, JSON.stringify(state.likedGames))
    },
    setGamesId: (state) => {
      state.gamesId = state.likedGames.map((game) => game.appId)
    },
    addGameId: (state, action: PayloadAction<string>) => {
      state.gamesId.push(action.payload)
    },
    removeGameId: (state, action: PayloadAction<string>) => {
      state.gamesId = state.gamesId.filter((id) => id !== action.payload)
    },
  },
})

// Other code such as selectors can use the imported `RootState` type
export const likedGamesSelector = (state: RootState) => state.like.likedGames
export const gamesIdSelector = (state: RootState) => state.like.gamesId

export const {
  addGame,
  removeGame,
  setGamesList,
  addGameId,
  removeGameId,
  setGamesId,
} = likeSlice.actions

export default likeSlice.reducer
