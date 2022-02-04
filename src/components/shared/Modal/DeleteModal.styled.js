import styled ,{css} from "styled-components";

export const StyledDeleteModal = css`
  padding-top: 25px;
  padding-bottom: 25px;

  .actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .actions button:first-of-type {
    background-color: #9d0000;
  }

  button {
    width: 40% !important;
    margin-left: 0;
  }
`;
