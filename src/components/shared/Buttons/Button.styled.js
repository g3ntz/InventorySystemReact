import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: var(--clr-primary);
  color: var(--clr-white);
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.3s ease-in;
  
  ${props => props.customCss};
`;
