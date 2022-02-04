import React from "react";
import { StyledHeader } from "./Header.styled";
import ProfileItem from "./ProfileItem";

export const Header = ({ pageText, redirectTo, changePageText }) => {
  return (
    <StyledHeader>
      <h2>{pageText}</h2>
      <ProfileItem
        name={"Filan Fisteku"}
        email={"Filan@gmail.com"}
        image={"../../images/avatar.png"}
        redirectTo={redirectTo}
        changePageText={changePageText}
      />
    </StyledHeader>
  );
};
