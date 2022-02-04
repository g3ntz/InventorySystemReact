import React, { useState } from "react";
import TablePage from "../../components/shared/TablePage/TablePage-template";
import { UsersTableContent } from "../../data/tableContent";
import { usersTable } from "../../data/tableStructure";
import Modal from "../../components/shared/Modal/Modal";

const User = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <TablePage redirectTo={"/admin/user/create"} tableData={usersTable}>
        <UsersTableContent setShowDeleteModal={setShowDeleteModal} />
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

export default User;
