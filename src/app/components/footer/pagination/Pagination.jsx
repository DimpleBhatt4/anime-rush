import React from 'react'
import ButtonStyle from '../../buttonStyle/ButtonStyle'

const Pagination = () => {
  return (
    <div className='flex justify-between mx-auto w-full border-t border-gray-300 p-4'>
        <div>Showing 1 to 10 of 20 results</div>
        <div className='flex gap-4'>
          <ButtonStyle value={'Previous'} />
          <ButtonStyle value={'Next'} />

        </div>
    </div>
  )
}

export default Pagination