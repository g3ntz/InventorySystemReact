import styled, { css } from "styled-components";
import { StyledDeleteModal } from "./DeleteModal.styled";
import { StyledViewNotesModal } from "./ViewNotesModal.styled";
import { StyledRequestRejectModal } from "./RequestRejectModal.styled";
import { StyledUserInventoryModal } from "./UserInventoryModal";

const active = css`
  transform: scale(1);
`;

export const StyledModal = styled.div`
  top: 30%;
  position: absolute;
  left: 30%;
  width: 40%;
  background-color: #7ea6ca;
  border-radius: 5px;
  padding: 15px 30px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 10px 12px rgba(0, 0, 0, 0.45));
  transition: all 0.3s ease;

  transform: scale(0);
  ${(props) => props.show && active}

  img {
    width: 100px;
    height: 100px;
    color: inherit;
  }

  p {
    font-weight: 500;
    padding-right: 20px;
  }

  i {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 2em;
    cursor: pointer;
    transition: all 0.3s ease;
    transform: scale(1.2);
    margin: 0 10px 0 0;
  }

  i:hover {
    transform: scale(1.4);
  }

  button {
    width: 30%;
    margin-left: auto;
    background-color: var(--clr-blue-semi-dark);
  }

  /* DELETE MODAL STYLES */
  ${(props) => (props.modalType === "delete" ? StyledDeleteModal : "")}

  /* VIEW NOTES MODAL STYLES */
  ${(props) => (props.modalType === "viewNotes" ? StyledViewNotesModal : "")}

  /* REJECT REQUEST MODAL STYLES */
  ${(props) => (props.modalType === "rejectRequest" ? StyledRequestRejectModal : "")}

  /* USER INVENTORY MODAL STYLES */
  ${(props) => (props.modalType === "userInventory" ? StyledUserInventoryModal : "")}


  @media screen and (max-width: 1190px) {
    left: 15%;
    width: 70%;
  }

  @media screen and (max-width: 890px) {
    left: 5%;
    width: 90%;
  }
`;
