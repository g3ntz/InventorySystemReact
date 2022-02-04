import React from "react";
import StyledLogo from "./Logo.styled";

const Logo = (props) => {
  return (
    <StyledLogo {...props}>
      <div className="logo-img">
        <img src="/images/logo-img.png" alt="" />
      </div>
      <h1 className="logo-text">Inventory</h1>
    </StyledLogo>
  );
};

export default Logo;
