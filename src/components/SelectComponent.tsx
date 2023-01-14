import React from "react";
import { useState } from "react";
import { StyledComponent } from "styled-components";
import { FilterBy, Order } from "../models/filter";
import { Options } from "../styledComponents/filterForm";

type Item = {
   value: string
   label: string
}

type Props = {
   filterBy: FilterBy | Order
   onChangeFilterBy: (e: React.ChangeEvent<HTMLInputElement>) => void
   items: Item[]
   SelectStyled: StyledComponent<"div", any, { isOpen?: boolean }, never>
}

const SelectComponent: React.FC<Props> = ({ filterBy, onChangeFilterBy, items, SelectStyled }) => {

   const [isOpen, setIsOpen] = useState(false)

   return (
      <SelectStyled isOpen={isOpen} onClick={() => {
         setIsOpen(true); console.log('open')
      }}>
         <div>{filterBy}</div>
         <Options isOpen={isOpen} onClick={(e) => { e.stopPropagation(); setIsOpen(false) }}>
            {items.map(item => <React.Fragment key={item.label}>
               <input id={item.label} type="radio" name="singleSelect"
                  value={item.value}
                  onChange={(e) => {
                     onChangeFilterBy(e); console.log('change');
                  }}
               />
               <label htmlFor={item.label} >{item.label}</label>
            </React.Fragment>)}
         </Options>
      </SelectStyled>
   )
}

export default SelectComponent

