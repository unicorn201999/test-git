import styled from "styled-components";
import searchIcon from '../assets/search-icon.png'
import orderIcon from '../assets/order-icon.png'

export const HEADER_ITEM_TEMPLATE = `
  background: #837F7F;
  height: 36px;
  border-radius: 10px;
  color: white;  
  border: transparent solid 1px;
  padding: 9px 15px;
  &::placeholder {
    color: white;
  }

  &:focus {
    outline: transparent;
    border: white solid 1px;
  }

  cursor: pointer;
`

export const Input = styled.input`
  ${HEADER_ITEM_TEMPLATE}
  cursor: default;
`;

export const SearchButton = styled.button`
  background: url(${searchIcon})  center no-repeat;
  font-size: 0;
  border: none;
  height: 23px;
  width: 23px;
  display: inline-block;
  cursor: pointer;
`

export const Select = styled.select`
  ${HEADER_ITEM_TEMPLATE}
`;

export const OrderSelect = styled(Select)`
  width: 36px;  
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url(${orderIcon});
  background-position: center;
  background-repeat: no-repeat;
  font-size: 0;

  & option {
    font-size: 14px;
  }
`


