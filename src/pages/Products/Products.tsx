import { useState } from "react";
import "./Products.scss";
import DataTable from "../../components/DataTable/DataTable";
import AddNew from "../../components/AddNew/AddNew";
import { GridColDef } from "@mui/x-data-grid";
import { productsData } from "../../data";

const dataTableColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "img", headerName: "Image", width: 100,
      renderCell: (params) => { 
        return <img src={params.row.img || "/noavatar.png"} alt="" />; 
      }
  },
  { field: "title", type: "string", headerName: "Title", width: 250 },
  { field: "color", type: "string", headerName: "Color", width: 150 },
  { field: "price", type: "string", headerName: "Price", width: 200 },
  { field: "producer", headerName: "Producer", type: "string", width: 200 },
  { field: "createdAt", headerName: "Created At", width: 200, type: "string" },
  { field: "inStock", headerName: "In Stock", width: 150, type: "boolean" },
];

const Products = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <div className="products">
      <div className="info">
        <h2>Products</h2>
        <button onClick={handleOpenModal}>Add New Products</button>
      </div>
      <DataTable slug="products" dataTableColumns={dataTableColumns} dataTableRows={productsData}/>
      { openModal && ( <AddNew slug="product" dataTableColumns={dataTableColumns} setOpenModal={setOpenModal}/> )}
    </div>
  );
};

export default Products;