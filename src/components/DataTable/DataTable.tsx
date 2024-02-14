import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid"
import "./DataTable.scss"
import { Link } from "react-router-dom"

type Props = {
  dataTableColumns: GridColDef[]
  dataTableRows: object[]
  slug: string
}

const DataTable = (props:Props) => {

  const handleDelete = (id:number) => {
    //dele the item
    //axios.delete(`/api/${props.slug}/${id}`)
    console.log(id + " has been deleted!")
  }

  const actionColumn:GridColDef = { 
    field:"action",
    headerName:"Action",
    width:200,
    renderCell:(params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      )
    }
  }

  return (
    <div className="data-Table">
      <DataGrid
        className="data-Grid"
        rows={props.dataTableRows}
        columns={[...props.dataTableColumns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: {debounceMs: 500}
          }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  )
}

export default DataTable