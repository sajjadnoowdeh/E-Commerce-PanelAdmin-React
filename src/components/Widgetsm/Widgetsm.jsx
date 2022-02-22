import { Visibility } from "@material-ui/icons";
import React from "react";
import "./Widgetsm.style.css";
const Widgetsm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">Anna Kaller</div>
            <div className="widgetSmUserTitle">Software Enginner</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className={"widgetSmIcon"} />
            display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
             className="widgetSmImg"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">Anna Kaller</div>
            <div className="widgetSmUserTitle">Software Enginner</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className={"widgetSmIcon"} />
            display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
             className="widgetSmImg"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">Anna Kaller</div>
            <div className="widgetSmUserTitle">Software Enginner</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className={"widgetSmIcon"} />
            display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
             className="widgetSmImg"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">Anna Kaller</div>
            <div className="widgetSmUserTitle">Software Enginner</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className={"widgetSmIcon"} />
            display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Widgetsm;
