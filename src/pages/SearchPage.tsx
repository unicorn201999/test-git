import PageContainer from "../components/PageContainer";
import { IGameItem } from "../models/gameItem";
import { useGetGamesByNameQuery } from "../services/searchApi";
import { filterSelector } from "../store/search-slice";
import { useAppSelector } from "../store/store";


const SearchPage: React.FC = () => {

   const filter = useAppSelector(filterSelector)

   const skip = filter.name ? false : true

   //this API does not provide the number of pages or elements, 
   //so only elements from the first page are used for correct pagination
   // const { data: games, refetch } = useGetGamesByNameQuery({ name: filter.name, page })
   const { data: games, isFetching } = useGetGamesByNameQuery({ name: filter.name }, { skip })

   return (
      <PageContainer games={games as IGameItem[]} filter={filter} isFetching={isFetching} />
   )
}

export default SearchPage
