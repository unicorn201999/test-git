import ReactDOM from "react-dom"
import styled from "styled-components"
import React from 'react'

const ModalContainer = styled.div`
   position: fixed;
   top: 10vh;
   left: 50%;
   transform: translate(-50%,0);
   z-index: 1001;
   overflow: hidden;
`
const Card = styled.div`
   overflow-y: auto;

   &::-webkit-scrollbar {
      width: 12px;               /* scrollbar width*/
    }

   &::-webkit-scrollbar-thumb {
      background-color: rgb(255,255,255);/* scrollbar color*/
      border-radius: 20px;
      border: 2px solid rgba(255, 255, 255, 1);  
    }
`
const Overlay = styled.div`
   position: fixed;
   top:0;
   left:0;
   right:0;
   bottom:0;
   background-color: rgba(0,0,0,.7);
   z-index: 1000;
`

type Props = {
   isOpen: boolean
   onClose: () => void
   children: JSX.Element | string
}

const portal = document.getElementById('portal')


const Modal: React.FC<Props> = ({ isOpen, children, onClose }) => {

   const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()
      onClose()
   }

   if (!isOpen) return null
   if (!portal) return null
   return ReactDOM.createPortal(<>
      <ModalContainer>
         <Card>
            {children}
         </Card>
      </ModalContainer>
      <Overlay onClick={closeModal}></Overlay>
   </>,
      portal)
}

export default Modal