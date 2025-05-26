import React from 'react'
import ButtonStyle from '../../buttonStyle/ButtonStyle'

const Pagination = ({currentPage, totalItems, setPageNum}) => {
  return (
    <div className='flex justify-between mx-auto w-full border-t border-gray-300 p-4'>
        <div>Showing {currentPage===1 ? currentPage : currentPage*10} to {currentPage===1 ? 10 : currentPage*10+10} of {totalItems} results</div>
        <div className='flex gap-4'>
          <ButtonStyle value={'Previous'} currentPage={currentPage} totalItems={totalItems} setPageNum={setPageNum} />
          <ButtonStyle value={'Next'} currentPage={currentPage} totalItems={totalItems} setPageNum={setPageNum} />

        </div>
    </div>
  )
}

export default Pagination