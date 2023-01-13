import styled from "styled-components"
import { IGameItem } from "../models/gameItem"
import GameCard from "./GameCard"

const List = styled.ul`
   list-style: none;
   padding: 0;
   display: grid;
   grid-template-columns: repeat(4,1fr);
   grid-gap: 22px;

   @media (max-width: 992px){
      grid-template-columns: repeat(3,1fr);
    }

    @media (max-width: 768px){
      grid-template-columns: repeat(2,1fr);
    }

    @media (max-width: 576px){
      grid-template-columns: 1fr
    }
`

interface Props {
   games: IGameItem[]
}

const GamesList: React.FC<Props> = ({ games }) => {
   return (
      <List>
         {/* some items don't have appId */}
         {games.map(game => game.appId ? <GameCard game={game} key={game.appId} /> : null)}
      </List>
   )
}

export default GamesList
