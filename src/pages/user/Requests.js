import React,{useState} from "react";
import TablePage from "../../components/shared/TablePage/TablePage-template";
import { UserRequestsTableContent } from "../../data/tableContent";
import { userRequestsTable } from "../../data/tableStructure";
import Modal from "../../components/shared/Modal/Modal";

const Requests = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <TablePage
        redirectTo={"/user/requests/create"}
        tableData={userRequestsTable}
      >
        <UserRequestsTableContent setShowDeleteModal={setShowDeleteModal} />
      </TablePage>

      <Modal
        show={showDeleteModal}
        setShowModal={setShowDeleteModal}
        modalType={"delete"}
      >
        <p>Are you sure you wanna delete this record?</p>
        <i
          onClick={() => setShowDeleteModal(false)}
          id="close-img-receive"
          className="fas fa-window-close"
        ></i>
        <div className="actions">
          <button>Yes</button>
          <button>No</button>
        </div>
      </Modal>
    </>
  );
};

export default Requests;
