import { useEffect, useState } from "react"
import styled from "styled-components"
import { FilterBy, IFilter, Order } from "../models/filter"
import { Input, OrderSelect, SearchIcon, Select } from "../styledComponents/filterForm"
import { useAppDispatch } from "../store/store";
import { setFilter } from "../store/search-slice";
import useDebounce from "../hooks/debounce";
import SelectComponent from "./SelectComponent";

const SearchInput = styled.div`
   position: relative;
   & input {
      width: 100%;
      height: 100%;
   };

   & > div {
      position: absolute;
      right: 15px;
      top: 6px;
   }
`

const Form = styled.form`
   display: grid;
   grid-template-columns: 1fr 36px auto;
   grid-gap: 12px;
  
   @media (max-width: 576px) {

      grid-template-columns: 1fr 36px;
      grid-template-rows: 1fr 1fr;
      & > div {
         &:first-of-type{
            order: 1;
            grid-column-start: 1;
            grid-column-end: 3;
         }
         &:nth-of-type(2){
            order: 3;
         }
         &:last-of-type{
            order: 2;
         }
      }
   }
`


const FilterForm: React.FC = () => {
   const [name, setName] = useState('')
   const [order, setOrder] = useState<Order>('lover-to-bigger')
   const [filterBy, setFilterBy] = useState<FilterBy>('Price')

   const dispath = useAppDispatch()

   //use debounce to prevent extra fetching
   const debouncedName = useDebounce(name, 300)

   useEffect(() => {
      const filter: IFilter = {
         name,
         order,
         filterBy
      }
      dispath(setFilter(filter))
   }, [debouncedName])

   const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      setName(e.target.value)
   }

   const onChangeFilterBy = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      setFilterBy(e.target.value as FilterBy)
      const filter: IFilter = {
         name,
         order,
         filterBy: e.target.value as FilterBy
      }
      dispath(setFilter(filter))
   }

   const onChangeOrder = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      setOrder(e.target.value as Order)
      const filter: IFilter = {
         name,
         order: e.target.value as Order,
         filterBy
      }
      dispath(setFilter(filter))
   }

   return (
      <Form>
         <SearchInput>
            <Input
               value={name}
               onChange={onChangeName}
               type="text" name="search-line" id="search-line" placeholder="Enter an app name..." />
            <SearchIcon>Search icon</SearchIcon>
         </SearchInput>
         <SelectComponent
            SelectStyled={OrderSelect}
            filterBy={order}
            onChangeFilterBy={onChangeOrder}
            items={[
               { value: 'lover-to-bigger', label: 'Lower to bigger' },
               { value: 'bigger-to-lower', label: 'Bigger to lower' }
            ]}
         />
         <SelectComponent
            SelectStyled={Select}
            filterBy={filterBy}
            onChangeFilterBy={onChangeFilterBy}
            items={[
               { value: 'Price', label: 'Price' },
               { value: 'Publish Date', label: 'Publish Date' }
            ]}
         />
      </Form>
   )
}

export default FilterForm
