import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
<p>For Better Experience Download <br /> <span className='text-orange-600'>Fork</span><span className='text-orange-950'>It</span> App</p>
<div className="app-download-platforms">
    <img src={assets.play_store} alt="" />
    <img src={assets.app_store} alt="" />
</div>
    </div>
  )
}

export default AppDownload