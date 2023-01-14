import React from 'react'
import styled from 'styled-components'
import { useGetDetailByIdQuery } from '../services/detailApi'
import Preloader from './Preloader'

const Card = styled.div`
   background: #837F7F;
   width: 400px;
   border-radius: 10px;
   padding: 15px;

   & > div {
      width: 100%;
      & > div {
         margin-bottom: 10px;
      }
   }

   @media (max-width: 448px){
      width: 90vw;
    }
   
`
type Props = {
   gameId: string
}
const GameDetail: React.FC<Props> = ({ gameId }) => {

   const { data: detail, isFetching } = useGetDetailByIdQuery({ id: gameId })

   return (
      <Card>
         {isFetching
            ? <Preloader />
            : <div>
               <div>Developer name: {detail?.developer.name}</div>
               <div>Developer link: <a href={detail?.developer.link}>To developer page</a></div>
               <div>Description: {detail?.description}</div>
               <div>Review count: {detail?.allReviews.reviewCount} </div>
               <div>Rating: {detail?.allReviews.ratingValue}</div>
            </div>
         }
      </Card>
   )
}

export default GameDetail
