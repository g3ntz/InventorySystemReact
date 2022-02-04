import reactDom from "react-dom";
import styled, { css } from "styled-components";

const navLogoStyles = css`
  padding: 20px 0 0 0;
  flex-direction: column;

  img {
    width: 40px !important;
    height: 35px !important ;
  }

  .logo-text {
    margin: 2px 0 0 0;
  }
`;

const homeLogoStyled = css`
  @media screen and (max-width: 700px) {
    padding: 0;
    height: 100%;
    align-items: center;
    justify-content: center;

    .logo-text {
      margin: 0;
    }

    .logo-img {
      width: 40px;
    }
  }
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 13px 0 0 18px;

  .logo-text {
    color: var(--clr-primary);
    text-transform: uppercase;
    font-weight: 700;
    margin-left: 10px;
    font-size: 1.3em;
  }

  .logo-img img {
    width: 100%;
    height: 100%;
  }

  ${(props) => props.isNavLogo ? navLogoStyles : homeLogoStyled}
`;

export default StyledLogo;
