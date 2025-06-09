/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import {assets} from '../../assets/assets'
import './Navbar.css'

const Navbar = () => {
    const [menu, setMenu] = useState("home")

  return (
    <div className='navbar mt-5 py-5 flex justify-between items-center'>
        <img className="logo w-[150px]  h-auto object-contain" src={assets.logo} alt="" />
        <ul className='navbar-menu flex list-none gap-[20px] text-2xl text-gray-700 font-outfit'>
            <li onClick={()=>setMenu("home")} className={menu === "home" ? "active":""}>home</li>
            <li onClick={()=>setMenu("menu")} className={menu === "menu" ? "active":""}>menu</li>
            <li onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app" ? "active":""}>mobile-app</li>
            <li onClick={()=>setMenu("contact-us")} className={menu === "contact-us" ? "active":""}>contact us</li>
        </ul>
        <div className='navbar-right flex items-center gap-10'>
            <img src={assets.search_icon} alt="" />
            <div className='navbar-search-icon'>
                <img src={assets.basket_icon} alt="" />
                <div className='dot'></div>
            </div>
            <button className='bg-transparent text-2xl text-gray-700 border border-gray-700 rounded-4xl py-3 px-8 hover:bg-amber-700 hover:text-amber-50'> Sign in </button>

        </div>
    </div>
  )
}

export default Navbar