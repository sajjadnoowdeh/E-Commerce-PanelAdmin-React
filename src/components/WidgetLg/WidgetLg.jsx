import React, { useEffect, useState } from "react";
import useGetProducts from "../CustomHook/CustomGet";
import ProductTransication from "../ProductTansication/ProductTransication";
import Skeleton from "@material-ui/lab/Skeleton";
import "./WidgetLg.style.css";
const WidgetLg = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts, loading, error] = useGetProducts("/orders");

  return (
    <>
      {loading ? (
        <div style={{ margin: "10px" }}>
          <Skeleton variant="text" />
          <Skeleton variant="circle" width={40} height={40} />
          <Skeleton variant="rect" width={210} height={118} />
        </div>
      ) : (
        <div className="widgetLg">
          <h3 className="widgetLgTitle">Letast Transication</h3>
          <table className="widegtLgTable">
            <tr className="widgetTableTr">
              <th className="widgetTableTh">Customer</th>
              <th className="widgetTableTh">Date</th>
              <th className="widgetTableTh">Amount</th>
              <th className="widgetTableTh">Status</th>
            </tr>
            {products &&
              products.map((order, index) => (
                <ProductTransication key={index} order={order} />
              ))}
          </table>
        </div>
      )}
    </>
  );
};

export default WidgetLg;
