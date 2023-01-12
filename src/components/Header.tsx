import { Link } from "react-router-dom"
import FilterForm from "./FilterForm"
import logo from '../assets/logo.png'
import styled from "styled-components"
import { HEADER_ITEM_TEMPLATE } from "../styledComponents/filterForm"

const HeaderBar = styled.header`
   display: grid;
   grid-template-columns: 127px 1fr auto;
   grid-gap: 12px;

   @media (max-width: 768px){
   grid-template-columns: 127px auto;
   grid-template-rows: 1fr 1fr;

      & > div {
         order: 1;
      }

      & > form {
         order: 3;
         grid-column-start: 1;
         grid-column-end: 3;
      }

      & > nav {
         order: 2;
         justify-self: start;
         width:100%;
         text-align: right;
      }
    }

    @media (max-width: 576px) {
      grid-template-rows: 1fr 2fr;
    }
`

const Nav = styled.nav`
   & a {
      ${HEADER_ITEM_TEMPLATE}
      font-size: 14px;
      display: inline-block;
      text-decoration: none;
      line-height: 14px;

      &:first-of-type{
         border-top-right-radius: 0;
         border-bottom-right-radius: 0;
         padding-right: 7.5px;
      }
      &:last-of-type{
         border-top-left-radius: 0;
         border-bottom-left-radius: 0;
         padding-left: 7.5px;
      }
   }
`


const Header: React.FC = () => {
   return (
      <HeaderBar>
         <div><img src={logo} alt="Logo steam" /></div>
         <FilterForm />
         <Nav>
            <Link to={'/search'}>Search</Link>
            <Link to={'/likes'}>Like list</Link>
         </Nav>
      </HeaderBar>
   )
}

export default Header
