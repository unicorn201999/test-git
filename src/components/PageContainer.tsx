import { useEffect, useState } from "react";
import GamesList from "./GamesList"
import Paginator from "./Paginator"
import Preloader from "./Preloader";
import { sortGamesBy } from "../utils/sort";
import { IGameItem } from "../models/gameItem";
import { IFilter } from "../models/filter";
import styled from "styled-components";

type Props = {
   isFetching: boolean
   games: IGameItem[]
   filter: IFilter
}
const NoResults = styled.div`
font-size: 30px;
margin-top: 10px;
`
const PageContainer: React.FC<Props> = ({ games, filter, isFetching }) => {
   const [page, setPage] = useState(1)

   useEffect(() => {
      setPage(1)
   }, [filter])

   if (isFetching) return <Preloader />
   if (!games) return <NoResults>No results</NoResults>

   const onPageChange: (selectedItem: { selected: number }) => void = (selectedItem) => {
      setPage(selectedItem.selected + 1)
   }

   const pageSize = 8
   const pageCount = Math.ceil(games.length / pageSize)

   const sortedGames = sortGamesBy([...games], filter)

   const displayedGames = sortedGames.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)

   return (
      <>
         <GamesList games={displayedGames} />
         <Paginator onPageChange={onPageChange} pageCount={pageCount} />
      </>
   )
}

export default PageContainer