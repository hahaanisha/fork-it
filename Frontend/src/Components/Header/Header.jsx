import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header' >
      <div className='header-contents'>
        <h2 className='text-7xl font-medium text-amber-50 font-outfit'>Order your favourite food here</h2>
        <p className='text-amber-50 text-[20px]'>Forkit makes food delivery effortless and fast. Browse through a variety of local restaurants, customize your meals, track your order in real-time, and have delicious food delivered straight to your doorstep.</p>
        <button className='border-0 border-amber-50 font-medium bg-amber-50 text-2xl rounded-[30px] py-[1vw] px-[2.3vw] '>View Menu</button>
      </div>
    </div>
  )
}

export default Header