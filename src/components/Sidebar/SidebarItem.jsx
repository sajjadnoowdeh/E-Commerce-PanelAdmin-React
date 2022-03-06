import React from 'react'

import {
  LineStyle,
  TrendingUp,
  Timeline,
} from "@material-ui/icons";
import { Link } from 'react-router-dom'
const SidebarItem = () => {
  return (
    <div className="sidebarMenu">
    <h3 className="sidebarTitle">Dashboard</h3>
    <ul className="sidebarList">
      <Link to={"/"}>
        <li className="sidebarListItem active">
          <LineStyle className="sidebarIcon" />
          Home
        </li>
      </Link>
      <li className="sidebarListItem">
        <Timeline className="sidebarIcon" />
        Analytics
      </li>
      <li className="sidebarListItem">
        <TrendingUp className="sidebarIcon" />
        Sales
      </li>
    </ul>
  </div>
  )
}

export default SidebarItem