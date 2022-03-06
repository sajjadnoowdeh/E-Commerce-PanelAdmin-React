import React, { useEffect, useState } from "react";

import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk, handleRemoveProductTunck } from "../../Store/reducers/product.reducer/product.reducer";

import "./ProductList.style.css";

const ProductList = () => {
  const { products, loading, error } = useSelector(
    (state) => state.reducer.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  const handleRemoveRow = (id) => {
    dispatch(handleRemoveProductTunck(id))
    dispatch(getProductsThunk());
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 150,
      renderCell: (params) => (
        <div className="productListItem">
          <img className="productListImg" src={params.row.img} />
          {params.row.title}
        </div>
      ),
    },
    {
      field: "inStock",
      headerName: "Stock",
      width: 150,
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
          <Link to={"/product/" + params.row._id}>
            <button className="productListEdit">Edit</button>
          </Link>
          <DeleteOutline
            className="productListDelete"
            onClick={() => handleRemoveRow(params.row._id)}
          />
        </>
      ),
    },
  ];
  return (
    <div className="productList">
      {loading ? (
        <>
          <Skeleton height={"50px"} />
          <Skeleton height={"50px"} animation={false} />
          <Skeleton height={"50px"} animation="wave" />
          <Skeleton height={"50px"} />
          <Skeleton height={"50px"} animation={false} />
          <Skeleton height={"50px"} animation="wave" />
          <Skeleton height={"50px"} />
          <Skeleton height={"50px"} animation={false} />
          <Skeleton height={"50px"} animation="wave" />
          <Skeleton height={"50px"} />
        </>
      ) : (
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={8}
          checkboxSelection
          getRowId={(row) => row._id}
          disableSelectionOnClick
        />
      )}
    </div>
  );
};

export default ProductList;
