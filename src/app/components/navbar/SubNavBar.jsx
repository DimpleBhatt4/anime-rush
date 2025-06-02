import React, { useState } from 'react'

const SubNavBar = ({navData, setNavData, setCurrURL}) => {

  const [activeCategory, setActiveCategory] = useState(navData[0].category)
    function updateCurrSelec(selectedObj) {
      const updatedSchedule = navData.map((item) =>
        !item.day && item.category === !selectedObj.day && selectedObj.category
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      );
      setNavData(updatedSchedule);
      setCurrURL(selectedObj.url);
      setActiveCategory(selectedObj.category)
    }
  return (
    <div className='my-6'>
        <ul className='flex justify-center border-b gap-4 md:gap-8 overflow-x-auto'>
          {navData?.map((item) => (
            <li
              key={!item.day ? item.category : item.day}
              className={`border-t border-l border-r  text-center px-3 py-2 text-sm rounded-t-lg shrink-0 ${
                item.category===activeCategory && "bg-white text-black"
              }`}>
              <button onClick={() => updateCurrSelec(item)}>
                {!item.day ? item.category  : item.day}
              </button>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default SubNavBar