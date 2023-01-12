import React from 'react'
import ReactPaginate from 'react-paginate'

type Props = {
   onPageChange: () => void
   pageCount: number
}

const Paginator: React.FC<Props> = ({ onPageChange, pageCount }) => {
   return (
      <ReactPaginate
         nextLabel="next page"
         onPageChange={onPageChange}
         pageCount={pageCount}
         previousLabel="previous page"
         renderOnZeroPageCount={() => null}
         containerClassName={'paginatorContainer'}
         pageClassName={'paginatorPage'}
         previousClassName={'paginatorPrevious'}
         nextClassName={'paginatorNext'}
         activeClassName={'paginatorActivePage'}
      />
   )
}

export default Paginator
