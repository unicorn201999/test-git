import { useEffect } from "react"
import PageContainer from "../components/PageContainer"
import { IGameItem } from "../models/gameItem"
import { likedGamesSelector, setGamesId, setGamesList } from "../store/like-slice"
import { filterSelector } from "../store/search-slice"
import { useAppDispatch, useAppSelector } from "../store/store"

export const LIKED_GAMES = 'LIKED-GAMES'

const LikesPage: React.FC = () => {
   const games = useAppSelector(likedGamesSelector)
   const dispatch = useAppDispatch()

   useEffect(() => {
      const gamesList = localStorage.getItem(LIKED_GAMES)
      const gamesListParse: IGameItem[] = JSON.parse(gamesList as string)
      dispatch(setGamesList(gamesListParse))
      dispatch(setGamesId())
   }, [dispatch])

   const filter = useAppSelector(filterSelector)

   return (
      <PageContainer games={games as IGameItem[]} filter={filter} isFetching={false} />
   )
}

export default LikesPage