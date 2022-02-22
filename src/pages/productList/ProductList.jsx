import React from "react";

import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";

import "./ProductList.style.css";
import { useState } from "react";
const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleRemoveRow = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 150,
      renderCell: (params) => (
        <div className="productListItem">
          <img className="productListImg" src={params.row.img} />
          {params.row.name}
        </div>
      ),
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => (
        <>
          <Link to={"/product/" + params.row.id}>
            <button className="productListEdit">Edit</button>
          </Link>
          <DeleteOutline
            className="productListDelete"
            onClick={() => handleRemoveRow(params.row.id)}
          />
        </>
      ),
    },
  ];
  return (
    <div className="productList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
