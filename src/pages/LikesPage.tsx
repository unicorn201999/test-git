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

   //searching liked games on like page
   let searchedGames: IGameItem[]

   if (filter?.name && filter.name.length > 0) {
      //check: does game title include typed text(filtered name)
      searchedGames = [...games].filter(game => (game.title).toLocaleLowerCase().includes((filter.name).toLocaleLowerCase()))
   } else {
      searchedGames = [...games]
   }

   return (
      <PageContainer games={searchedGames as IGameItem[]} filter={filter} isFetching={false} />
   )
}

export default LikesPage