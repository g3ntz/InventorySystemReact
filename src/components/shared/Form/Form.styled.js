import styled, { css } from "styled-components";

/* DEFINED STYLES FOR CENTERED FORM */
const CenteredForm = css`
  padding: 3vh 1.5vw 2vh 1.5vw;
  width: 550px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;

  h2 {
    font-size: 1.4em;
    margin-bottom: 2.5vh;
  }

  input,
  select {
    padding: 1.2vh;
  }

  select {
    display: block;
    width: 100%;
    margin-bottom: 20px;
  }

  button {
    padding: 15px;
  }
`;

export const StyledForm = styled.div`
  background-color: var(--clr-white);
  width: 350px;
  padding: 10% 5% 10%;
  border-radius: 10px;
  box-shadow: 0px 0px 12px 0px rgb(26 179 148 / 39%);

  h2 {
    text-align: center;
    font-size: 1.1rem;
    color: var(--clr-secondary-dark);
    font-weight: 500;
    margin-bottom: 1.5em;
  }

  .input-group {
    overflow: hidden;
    
  }

  .input-group label {
    font-size: 0.8em;
    font-weight: 500;
    color: var(--clr-secondary-dark);
  }

  .input-group small {
    font-size: 0.7em;
    margin-top: -10px;
    margin-bottom: 5px;
    display: block;
    color: red;
    opacity: 0;
    // transform: translateX(10%);
    transition: all 0.5s ease;
  }

  .input-group small::first-letter {
    text-transform: capitalize;
  }

  .input-group.success input {
    border-color: green;
  }

  .input-group.error input {
    border-color: red;
  }

  input {
    width: 100%;
    font-size: 0.8em;
    margin-top: 3px;
  }

  a {
    width: 100%;
  }

  .forgot-password {
    display: flex;
    justify-content: center;
    font-size: 0.7em;
    padding: 1vh 0;
  }

  .forgot-password a {
    color: var(--clr-secondary-light);
    width: initial;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }

  ${(props) => props.isCentered && CenteredForm}
`;
