import React from "react";

import {format} from 'timeago.js'
const Button = ({ type }) => {
  return <button className={"widgetLgButton " + type}>{type}</button>;
};
const ProductTransication = ({ order }) => {
  return (
    <tr className="widgetTableTr">
      <th className="widgetLgUser">
        <span className="widgetLgName">{order.userId}</span>
      </th>
      <th className="widgetLgDate">{format(order.createdAt)}</th>
      <th className="widgetLgAmount">${order.amount}</th>
      <th className="widgetLgStatus">
        <Button type={order.status} />
      </th>
    </tr>
  );
};

export default ProductTransication;
