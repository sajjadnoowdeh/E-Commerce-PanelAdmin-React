import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./UserList.style.css";
import { DeleteOutline } from "@material-ui/icons";

import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleRemoveRow = (id)=>{
     setData(data.filter((item)=>(item.id !== id)))
  }
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 150,
      renderCell: (params) => (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} />
          {params.row.username}
        </div>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => (
        <>
          <Link to={"/user/" + params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutline className="userListDelete"  onClick={()=>handleRemoveRow(params.row.id)}/>
        </>
      ),
    },
  ];

  return (
    <div className="userList" >
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

export default UserList;
