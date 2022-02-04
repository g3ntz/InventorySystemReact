import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6%;
  padding: 0 30px;

  h2 {
    align-self: end;
    font-size: 1.12em;
    font-weight: 800;
    text-transform: uppercase;
  }

  @media screen and (max-width: 890px) {
    align-items: start;
    height: 10%;
  }
`;
