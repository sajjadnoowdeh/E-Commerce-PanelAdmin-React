import React from 'react'

// import {Language,Settings} from '@material-ui/icons';
import { Notifications,Language, Settings } from '@material-ui/icons';

import  './TopBar.style.css'


const TopBar = () => {
  return (
    <div className='topbar'>
       <div className="topbarWrapper">
           <div className="topLeft">
               <span className="logo">
                   React Admin
               </span>
           </div>
           <div className="topRight">
               <div className="topIconsContainer">
                   <Notifications />
                   <span className='topIconsBadge'>2</span>
               </div>
               <div className="topIconsContainer">
                   <Language />
                   <span className='topIconsBadge'>2</span>
               </div>
               <div className="topIconsContainer">
                   <Settings />
               </div>
               <img className='avatar' src="https://avatars.githubusercontent.com/u/62538147?v=4" alt="" />
           </div>
       </div>
    </div>
  )
}

export default TopBar