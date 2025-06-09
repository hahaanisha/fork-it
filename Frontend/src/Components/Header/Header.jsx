import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header' >
      <div className='header-contents'>
        <h2 className='text-7xl font-medium text-amber-50 font-outfit'>Order your favourite food here</h2>
        <p className='text-amber-50 text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae modi ut vero assumenda molestias vel nihil velit magnam quod beatae quisquam odit esse odio corrupti minima reprehenderit fugit, ex sequi..</p>
        <button className='border-0 border-amber-50 font-medium bg-amber-50 text-2xl rounded-[30px] py-[1vw] px-[2.3vw] '>View Menu</button>
      </div>
    </div>
  )
}

export default Header