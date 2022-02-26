import React from "react";
import { Visibility } from "@material-ui/icons";
import './NewMembers.style.css'
const NewMembers = ({ user }) => {
  return (
    <li className="widgetSmListItem">
      <img
        className="widgetSmImg"
        src={
          user.img ||
          "https://img.favpng.com/25/13/19/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.jpg"
        }
        alt=""
      />
      <div className="widgetSmUser">
        <div className="widgetSmUsername">{user.username}</div>
        {/* <div className="widgetSmUserTitle">Software Enginner</div> */}
      </div>
      <button className="widgetSmButton">
        <Visibility className={"widgetSmIcon"} />
        display
      </button>
    </li>
  );
};

export default NewMembers;
