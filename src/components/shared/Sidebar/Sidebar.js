import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import {
  LogOutItem,
  StyledSidebar,
  Menu,
  NavItem,
  StyledFullSidebar,
} from './Sidebar.styled';
import {Bounce} from 'react-reveal';

const Sidebar = (props) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [showSidebar, setShowSidebar] = useState(false);

  const checkSize = () => {
    if (windowSize > 870) {
      props.setShowNavButton(false);
      setShowSidebar(true);
    } else {
      props.setShowNavButton(true);
      setShowSidebar(false);
    }
  };

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  }

  useEffect(() => {
    checkSize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <>
      {showSidebar && (
        <StyledSidebar>
          <Logo isNavLogo={true} />
          <Menu>
            <ul>
              {props.navItems.map((item, index) => {
                return (
                  <NavItem key={index}>
                    <Link
                      to={item.redirectTo}
                      onClick={() => props.changePageText(item.text)}
                    >
                      <img src={item.image} alt="" />
                      <p>{item.text}</p>
                    </Link>
                  </NavItem>
                );
              })}
            </ul>
          </Menu>
          <LogOutItem>
            <hr />
            <NavItem>
              <Link to={'/'}>
                <img src="../../images/logout-icon.svg" alt="" />
                <p>Log Out</p>
              </Link>
            </NavItem>
          </LogOutItem>
        </StyledSidebar>
      )}

      {(props.showFullSidebar && !showSidebar) && (
        <Bounce
          left
          delay={1}
          duration={900}
        >
          <StyledFullSidebar>
            <i onClick={() => props.setShowFullSidebar(false)} id="hide-nav" class="fas fa-times" style={{display: 'inline-block'}}></i>
            <Logo isNavLogo={true} />
            <Menu>
              <ul>
                {props.navItems.map((item, index) => {
                  return (
                    <NavItem key={index}>
                      <Link
                        to={item.redirectTo}
                        onClick={() => props.changePageText(item.text)}
                      >
                        <img src={item.image} alt="" />
                        <p>{item.text}</p>
                      </Link>
                    </NavItem>
                  );
                })}
              </ul>
            </Menu>
            <LogOutItem>
              <hr />
              <NavItem>
                <Link to={'/'}>
                  <img src="../../images/logout-icon.svg" alt="" />
                  <p>Log Out</p>
                </Link>
              </NavItem>
            </LogOutItem>
          </StyledFullSidebar>
        </Bounce>
      )}
    </>
  );
};

export default Sidebar;
