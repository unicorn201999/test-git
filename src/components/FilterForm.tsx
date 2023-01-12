import styled from "styled-components"
import { Input, OrderSelect, SearchButton, Select } from "../styledComponents/filterForm"

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
   return (
      <Form>
         <SearchInput>
            <Input type="text" name="search-line" id="search-line" placeholder="Enter an app name..." />
            <SearchButton type="submit">Search</SearchButton>
         </SearchInput>
         <OrderSelect name="order" id="filterBy">
            <option value="lover-to-bigger">Lower to bigger</option>
            <option value="bigger-to-lower">Bigger to lower</option>
         </OrderSelect>
         <Select name="filterBy" id="filterBy">
            <option value="price">Price</option>
            <option value="publish-date">Publish Date</option>
         </Select>
      </Form>
   )
}

export default FilterForm
