import styled from "styled-components";

export const StyledSidebar = styled.nav`
  width: 270px;
  height: 100%;
  background: var(--clr-blue-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  transition: all 1s ease;
`;

export const StyledFullSidebar = styled(StyledSidebar)`
  width: 100%;
  z-index: 999;

  #hide-nav {
    position: absolute;
    right: 5%;
    top: 4%;
    color: white;
    font-size: 2em;
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  width: 100%;
  color: white;
  margin-top: 40px;
`;

export const NavItem = styled.div`
  padding: 5px 0;
  margin-bottom: 10px;
  margin-left: 16px;

  a {
    display: flex;
    padding-left: 13px;
    align-items: center;
    margin-left: 10px;
    transition: all 0.5s cubic-bezier(0.15, 0.62, 0.13, 1.1);
  }

  a:hover {
    transform: translateX(5%);
  }

  p {
    margin-left: 30px;
    font-size: 0.9em;
    font-weight: 500;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

export const LogOutItem = styled.div`
  width: 100%;
  margin-top: auto;
  margin-bottom: 20%;
  display: flex;
  flex-direction: column;
  color: white;

  hr {
    width: 75%;
    margin: 0 auto 20px auto;
    border: none;
    height: 1px;
    background-color: rgba(26, 179, 148, 0.34);
  }
`;
