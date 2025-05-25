import React from 'react'

const SubNavBar = ({nav_data}) => {
  return (
    <div className='my-6'>
        <ul className='flex justify-center border-b gap-8'>
          {nav_data.map((item) => (
            <li
              key={item.day}
              className={`border-t border-l border-r w-[8%] text-center py-1 text-sm rounded-t-lg ${
                item.isActive && "bg-white text-black"
              }`}>
              <button onClick={() => handleDaySchedule(item)}>
                {item.day}
              </button>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default SubNavBar