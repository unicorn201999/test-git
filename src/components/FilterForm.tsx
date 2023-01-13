import { useState } from "react"
import styled from "styled-components"
import { FilterBy, IFilter, Order } from "../models/filter"
import { Input, OrderSelect, SearchButton, Select } from "../styledComponents/filterForm"
import { useAppDispatch } from "../store/store";
import { setFilter } from "../store/search-slice";

const SearchInput = styled.div`
   position: relative;
   & input {
      width: 100%;
      height: 100%;
   };

   & button {
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
         order: 1;
         grid-column-start: 1;
         grid-column-end: 3;
      }

      & > select {
         &:first-of-type{
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
   const [filterBy, setFilterBy] = useState<FilterBy>('price')

   const dispath = useAppDispatch()

   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const filter: IFilter = {
         name,
         order,
         filterBy
      }
      dispath(setFilter(filter))
   }
   const onChangeFilterBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
      e.preventDefault()
      setFilterBy(e.target.value as FilterBy)
      const filter: IFilter = {
         name,
         order,
         filterBy: e.target.value as FilterBy
      }
      dispath(setFilter(filter))
   }

   const onChangeOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
      <Form onSubmit={onSubmit}>
         <SearchInput>
            <Input
               value={name}
               onChange={(e) => setName(e.target.value)}
               type="text" name="search-line" id="search-line" placeholder="Enter an app name..." />
            <SearchButton type="submit">Search</SearchButton>
         </SearchInput>
         <OrderSelect
            value={order}
            onChange={onChangeOrder}
            name="order" id="filterBy">
            <option value="lover-to-bigger">Lower to bigger</option>
            <option value="bigger-to-lower">Bigger to lower</option>
         </OrderSelect>
         <Select
            value={filterBy}
            onChange={onChangeFilterBy}
            name="filterBy" id="filterBy">
            <option value="price">Price</option>
            <option value="publish-date">Publish Date</option>
         </Select>
      </Form>
   )
}

export default FilterForm
