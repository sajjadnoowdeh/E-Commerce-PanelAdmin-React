import React from "react";
import "./WidgetLg.style.css";
const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Letast Transication</h3>
      <table className="widegtLgTable">
        <tr className="widgetTableTr">
          <th className="widgetTableTh">Customer</th>
          <th className="widgetTableTh">Date</th>
          <th className="widgetTableTh">Amount</th>
          <th className="widgetTableTh">Status</th>
        </tr>
        <tr className="widgetTableTr">
          <th className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susun lalar</span>
          </th>
          <th className="widgetLgDate">2021 Jun e</th>
          <th className="widgetLgAmount">$1222</th>
          <th className="widgetLgStatus">
            <Button type={"Approved"} />
          </th>
        </tr>
        <tr className="widgetTableTr">
          <th className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susun lalar</span>
          </th>
          <th className="widgetLgDate">2021 Jun e</th>
          <th className="widgetLgAmount">$1222</th>
          <th className="widgetLgStatus">
            <Button type={"Declined"} />
          </th>
        </tr>
        <tr className="widgetTableTr">
          <th className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susun lalar</span>
          </th>
          <th className="widgetLgDate">2021 Jun e</th>
          <th className="widgetLgAmount">$1222</th>
          <th className="widgetLgStatus">
            <Button type={"Pending"} />
          </th>
        </tr>
        <tr className="widgetTableTr">
          <th className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susun lalar</span>
          </th>
          <th className="widgetLgDate">2021 Jun e</th>
          <th className="widgetLgAmount">$1222</th>
          <th className="widgetLgStatus">
            <Button type={"Approved"} />
          </th>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
