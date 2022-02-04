import React, { useState } from "react";
import TablePage from "../../components/shared/TablePage/TablePage-template";
import { userInventoryTable } from "../../data/tableStructure";
import { UserInventoryTableContent } from "../../data/tableContent";
import Modal from "../../components/shared/Modal/Modal";

const Inventory = () => {
  const [showViewNotesModal, setShowViewNotesModal] = useState(false);
  const [showAcceptModal, setShowAcceptModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);

  return (
    <>
      <TablePage
        redirectTo={"/admin/inventory/create"}
        tableData={userInventoryTable}
      >
        <UserInventoryTableContent
          setShowViewNotesModal={setShowViewNotesModal}
          setShowAcceptModal={setShowAcceptModal}
          setShowRejectModal={setShowRejectModal}
        />
      </TablePage>

      {/* VIEW NOTES MODAL */}
      <Modal
        show={showViewNotesModal}
        setShowModal={setShowViewNotesModal}
        modalType={"viewNotes"}
      >
        <h2>View Notes</h2>
        <label htmlFor="receivedNote">Received Note:</label>
        <textarea
          name="receivedNote"
          id="receivedNote"
          cols="30"
          rows="3"
          disabled
        ></textarea>
        <label htmlFor="rejectedNote">Rejected Note:</label>
        <textarea
          name="rejectedNote"
          id="rejectedNote"
          cols="30"
          rows="3"
          disabled
        ></textarea>
        <i
          onClick={() => setShowViewNotesModal(false)}
          id="close-img-receive"
          className="fas fa-window-close"
        ></i>
        <button>Close</button>
      </Modal>

      {/* RECEIVE MODAL */}
      <Modal
        show={showAcceptModal}
        setShowModal={setShowAcceptModal}
        modalType={"userInventory"}
      >
        <img src="../../images/happy-icon.svg" alt="" />
        <p>We're happy that you received this product, leave a note</p>
        <textarea name="" id="" cols="30" rows="3"></textarea>
        <i
          onClick={() => setShowAcceptModal(false)}
          id="close-img-reject"
          class="fas fa-window-close"
        ></i>
        <button>Receive</button>
      </Modal>

      {/* REJECT MODAL */}
      <Modal
        show={showRejectModal}
        setShowModal={setShowRejectModal}
        modalType={"userInventory"}
      >
        <img src="../../images/sad-icon.svg" alt="" />
        <p>Tell us the reason why you're rejecting this product</p>
        <textarea name="" id="" cols="30" rows="3"></textarea>
        <i
          onClick={() => setShowRejectModal(false)}
          id="close-img-reject"
          class="fas fa-window-close"
        ></i>
        <button>Reject</button>
      </Modal>
    </>
  );
};

export default Inventory;
