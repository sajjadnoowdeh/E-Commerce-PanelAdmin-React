import React from "react";
const Button = ({ type }) => {
  return <button className={"widgetLgButton " + type}>{type}</button>;
};
const ProductTransication = ({ order }) => {
  return (
    <tr className="widgetTableTr">
      <th className="widgetLgUser">
        <span className="widgetLgName">{order.userId}</span>
      </th>
      <th className="widgetLgDate">{order.createdAt}</th>
      <th className="widgetLgAmount">${order.amount}</th>
      <th className="widgetLgStatus">
        <Button type={"Approved"} />
      </th>
    </tr>
  );
};

export default ProductTransication;
