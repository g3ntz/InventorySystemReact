import React from "react";
import { StyledModal } from "./Modal.styled";

const Modal = ({ show, modalType, children }) => {
  return (
    <StyledModal show={show} modalType={modalType}>
      {children}
    </StyledModal>
  );
};

export default Modal;
