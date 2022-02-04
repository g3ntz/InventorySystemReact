import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: rgba(187, 223, 216, 1);
  width: 300px;
  border-radius: 10px;
  padding: 10px 25px 18px 25px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  .card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-title {
    display: flex;
    flex: 1;
    align-items: center;
  }

  .card-title p {
    font-size: 0.8em;
    font-weight: 800;
    margin-left: 10px;
  }

  .card-link a {
    display: flex;
    flex: 1;
    justify-content: end;
    align-items: center;
    transition: all 0.3s ease-out;
  }

  .card-link a:hover {
    transform: translateX(10px);
    font-weight: 900;
  }

  .card-link p {
    font-size: 0.6em;
    color: var(--clr-primary);
    letter-spacing: 0.03em;
    font-weight: 700;
    margin-right: 5px;
  }

  .card-link img {
    width: 18px;
    height: 10px;
    object-fit: cover;
  }

  .card-body {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .stat-item .value {
    font-size: 1.7em;
    font-weight: 800;
    color: #0d3c5c;
  }

  .stat-item .text {
    font-size: 0.7em;
    font-weight: 800;
    padding-top: 10px;
  }

  @media screen and (max-width: 1170px) {
    width: 100% !important ;
  }

  @media screen and (max-width: 1309px) {
    width: 400px;

    &:nth-of-type(3) {
      flex-grow: 1;
    }
  }
`;
