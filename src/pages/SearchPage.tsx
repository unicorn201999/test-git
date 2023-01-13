import { useState } from "react";
import GamesList from "../components/GamesList"
import Paginator from "../components/Paginator"
import Preloader from "../components/Preloader";
import { useGetGamesByNameQuery } from "../services/searchApi";
import { useAppSelector } from "../store/store";
import { sortGamesBy } from "../utils/sort";


const SearchPage: React.FC = () => {
   const [page, setPage] = useState(1)
   const filter = useAppSelector(state => state.search.filter)

   const skip = filter.name ? false : true

   //this API does not provide the number of pages or elements, so only elements from the first page are used for correct pagination
   // const { data: games, refetch } = useGetGamesByNameQuery({ name: filter.name, page })
   const { data: games, isFetching } = useGetGamesByNameQuery({ name: filter.name }, { skip })


   if (isFetching) return <Preloader />
   if (!games) return <div>No results</div>

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

export default SearchPage
