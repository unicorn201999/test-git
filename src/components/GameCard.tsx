import styled from "styled-components"
import { IGameItem } from "../models/gameItem"
import emptyLike from "../assets/empty-like.png"
import fillLike from "../assets/like.png"
import { addGame, addGameId, gamesIdSelector, removeGame, removeGameId } from "../store/like-slice"
import { useAppDispatch, useAppSelector } from "../store/store"

const ListItem = styled.li`
   background: #17323A;
   border-radius: 10px;
   overflow: hidden;

   display: grid;
   grid-template-rows: 1fr 1.15fr;

   & img {
      width: 100%;
   }
`

const ItemBody = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   position: relative;

   padding: 8px 11px;
   font-family: Inter;
   font-weight: 400;
   letter-spacing: 0em;
   & h3 {
      font-size: 18px;
      line-height: 22px;
      margin: 0;
      margin-bottom: 6px;
   }

   & > div {
      & > div {
         font-size: 15px;
         line-height: 18px;
         margin-bottom: 6px;
         &:last-of-type {
            font-size: 14px;
            line-height: 17px;
         }
      }
   }

   & > button {
      right: 12px;
      bottom: 7.5px; 
      position: absolute;
   }
`

const Like = styled.button<{ isLiked: boolean }>`
   height: 22px;
   width: 23px;
   background: url(${p => p.isLiked ? fillLike : emptyLike}) center no-repeat;
   display: inline-block;
   border: none;
   cursor: pointer;
   color: transparent;
`

interface Props {
   game: IGameItem
}

const GameCard: React.FC<Props> = ({ game }) => {

   const dispath = useAppDispatch()

   const addToLikes = (e: React.MouseEvent<HTMLButtonElement>, game: IGameItem) => {
      e.preventDefault()
      dispath(addGame(game))
      dispath(addGameId(game.appId))
   }

   const removeFromLikes = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
      e.preventDefault()
      dispath(removeGame(id))
      dispath(removeGameId(game.appId))
   }

   const gamesId = useAppSelector(gamesIdSelector)

   const isLiked = gamesId.includes(game.appId)

   return (
      <ListItem>
         <img src={game.imgUrl} alt={game.title} />
         <ItemBody>
            <h3>{game.title}</h3>
            <div>
               <div>{game.released}</div>
               <div>{game.price}</div>
            </div>
            <Like isLiked={isLiked} onClick={(e) => { isLiked ? removeFromLikes(e, game.appId) : addToLikes(e, game) }}>{isLiked ? 'Unlike' : 'Like'}</Like>
         </ItemBody>
      </ListItem>
   )
}

export default GameCard
