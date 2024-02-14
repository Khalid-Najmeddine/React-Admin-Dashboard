import { GridColDef } from "@mui/x-data-grid";
import "./AddNew.scss";

type Props = {
  slug: string;
  dataTableColumns: GridColDef[];
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddNew = (props: Props) => {
  const handleCloseModal = () => {
    props.setOpenModal(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    //add new item
  };

  return (
    <div className="add-New">
      <div className="modal">
        <span className="close" onClick={handleCloseModal}>
          X
        </span>
        <h2>Add new {props.slug}</h2>
        <form onSubmit={handleSubmit}>
          {props.dataTableColumns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item" key={column.field}>
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default AddNew;
