import React, { useState } from "react";
import TablePage from "../../components/shared/TablePage/TablePage-template";
import { AdminRequestsTableContent } from "../../data/tableContent";
import { adminRequestsTable} from "../../data/tableStructure";
import Modal from "../../components/shared/Modal/Modal";
import { useNavigate } from "react-router-dom";

const Requests = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate()

  return (
    <>
      <TablePage
        redirectTo={"/admin/requests/create"}
        tableData={adminRequestsTable}
      >
        <AdminRequestsTableContent setShowDeleteModal={setShowDeleteModal} navigate={navigate} />
      </TablePage>

      <Modal
        show={showDeleteModal}
        setShowModal={setShowDeleteModal}
        modalType={"rejectRequest"}
      >
        <p>Leave a Note</p>
        <i
          onClick={() => setShowDeleteModal(false)}
          id="close-img-receive"
          className="fas fa-window-close"
        ></i>
        <div className="actions" style={{flexDirection: 'column'}}>
          <textarea></textarea>
          <button>Reject</button>
        </div>
      </Modal>
    </>
  );
};

export default Requests;
