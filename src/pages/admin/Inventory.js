import React, { useEffect, useState } from 'react'
import Modal from '../../components/shared/Modal/Modal'
import TablePage from '../../components/shared/TablePage/TablePage-template'
import { InventoryTableContent } from '../../data/tableContent'
import {inventoryTable} from '../../data/tableStructure'

const Inventory = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showViewNotesModal, setShowViewNotesModal] = useState(false);

  return (
    <>
    <TablePage redirectTo={'/admin/inventory/create'} tableData={inventoryTable}>
      <InventoryTableContent setShowDeleteModal={setShowDeleteModal} setShowViewNotesModal={setShowViewNotesModal} />
    </TablePage>

    <Modal show={showDeleteModal} setShowModal={setShowDeleteModal} modalType={'delete'}>
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

    <Modal show={showViewNotesModal} setShowModal={setShowViewNotesModal} modalType={'viewNotes'}>
      <h2>View Notes</h2>
      <label htmlFor="receivedNote">Received Note:</label>
      <textarea name="receivedNote" id="receivedNote" cols="30" rows="3" disabled></textarea>
      <label htmlFor="rejectedNote">Rejected Note:</label>
      <textarea name="rejectedNote" id="rejectedNote" cols="30" rows="3" disabled></textarea>
      <i 
        onClick={() => setShowViewNotesModal(false)} 
        id="close-img-receive" 
        className="fas fa-window-close"></i>
      <button>Close</button>
    </Modal>
    </>
  )
}

export default Inventory
