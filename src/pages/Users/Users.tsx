import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../components/DataTable/DataTable"
import "./Users.scss"
import { userRows } from "../../data";

const dataTableColumns: GridColDef[] = [
  { field:'id', headerName: 'ID', width: 90 },
  { field: "img", headerName: "Avatar", width: 100, 
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />
    }
  },
  { field:'firstName', type:"string", headerName:'First name', width:130 },
  { field:'lastName', type:"string", headerName:'Last name', width:130 },
  { field:'email',type:"string", headerName:'Email', width:200 },
  { field:"phone", type:"string", headerName:"Phone", width:150 },
  { field:"createdAt", type:"string", headerName:"Created At", width:100 },
  { field:"verified", type:"boolean", headerName:"Verified", width:150 },
];

const Users = () => {
  return (
    <div className="users">
      <div className="info">
        <h2>Users</h2>
        <button>Add New User</button>
      </div>
      <DataTable slug="users" dataTableColumns={dataTableColumns} dataTableRows={userRows}/>
    </div>
  )
}

export default Users