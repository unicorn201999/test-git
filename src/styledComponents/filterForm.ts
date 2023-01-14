import styled from "styled-components"
import searchIcon from "../assets/search-icon.png"
import orderIcon from "../assets/order-icon.png"
import iconPrice from "../assets/icon-price.png"
import iconDate from "../assets/icon-date.png"
import selectArrowBottom from "../assets/select-arrow-bottom.png"

export const HEADER_ITEM_TEMPLATE = `
  background: #837F7F;
  height: 36px;
  border-radius: 10px;
  color: white;  
  border: transparent solid 1px;
  padding: 9px 15px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
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
`

export const SearchIcon = styled.div`
  background: url(${searchIcon}) center no-repeat;
  font-size: 0;
  border: none;
  height: 23px;
  width: 23px;
  display: inline-block;
`

export const Select = styled.div<{ isOpen?: boolean }>`
  ${HEADER_ITEM_TEMPLATE}
  position:relative;
  padding: 0;
  min-width: 190px;
  & input {
    display: none;
  }

  & > div {
    padding: 9px 15px;
    height: 36px;

    &:last-of-type {
      padding: 0;
      display: flex;
      flex-direction: column;
      position: relative;
      top: 7px;
    }
  }

  &::after {
    content: "";
    width: 30px;
    height: 36px;
    background: url(${selectArrowBottom}) center no-repeat;
    transform: rotate(${(p) => (p.isOpen ? "180deg" : "0deg")});
    position: absolute;
    top: -1px;
    right: 11px;
  }
`

export const Options = styled.div<{ isOpen: boolean }>`
  & label {
    ${HEADER_ITEM_TEMPLATE}
    border-radius:0px;
    position: relative;
    &::after {
      content: "";
      width: 30px;
      height: 36px;
      background: url(${iconPrice}) center no-repeat;
      position: absolute;
      top: 0px;
      right: 11px;
    }

    &:first-of-type {
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }

    &:last-of-type {
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;

      &::after {
        background: url(${iconDate}) center no-repeat;
      }
    }
  }

  display: ${(p) => (p.isOpen ? "flex" : "none")}!important;
`

export const OrderSelect = styled(Select)`
  min-width: auto;

  width: 36px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url(${orderIcon});
  background-position: center;
  background-repeat: no-repeat;
  // font-size: 0;
  color: transparent;

  & div {
    @media (max-width: 578px) {
      &:last-of-type {
        align-items: end;
      }
    }
  }

  & option {
    font-size: 14px;
  }

  & label {
    width: 144px;
    &::after {
      display: none;
    }
  }

  &::after {
    display: none;
  }
`
