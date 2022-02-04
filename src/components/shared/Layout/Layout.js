import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { StyledMain } from "../Main/Main.styled";
import { Header } from "../Header/Header";
import Page from "../Main/Page";

const Layout = (props) => {
  const [pageText, setPageText] = useState("dashboard");
  const [showNavButton, setShowNavButton] = useState(false);
  const [showFullSidebar, setShowFullSidebar] = useState(false);

  const changePageText = (pageText) => {
    setPageText(pageText);
  };

  return (
    <>
      { showNavButton && <i id="show-nav" className="fas fa-bars" onClick={() => setShowFullSidebar(!showFullSidebar)}></i> }
      <Sidebar 
        navItems={props.navItems} 
        changePageText={changePageText} 
        setShowNavButton={setShowNavButton} 
        showFullSidebar={showFullSidebar}
        setShowFullSidebar={setShowFullSidebar}
      />  
      <StyledMain>
        <Header
          pageText={pageText}
          redirectTo={props.redirectTo}
          changePageText={changePageText}
        />
        <Page>{props.children}</Page>
      </StyledMain>
    </>
  );
};

export default Layout;
