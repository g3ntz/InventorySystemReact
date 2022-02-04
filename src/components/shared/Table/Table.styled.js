import styled from "styled-components";

export const StyledTable = styled.table`
  td.sorting_1::before,
  td.dtr-control::before {
    background-color: var(--clr-primary) !important;
  }

  

  .paginate_button {
    background-color: var(--clr-primary);
  }

  .table {
    margin-top: 30px;
  }

  td {
    max-width: 350px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }

  i {
    transition: all 0.3s ease;
    transform: scale(1.2);
    cursor: pointer;
  }

  i:hover {
    transform: scale(1.4);
  }
`;
