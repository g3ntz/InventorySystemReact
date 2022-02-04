import React from "react";
import { StyledProfileItem } from "./ProfileItem.styled";
import { Link } from "react-router-dom";

const ProfileItem = (props) => {
  return (
    <Link 
      to={props.redirectTo} 
      onClick={() => props.changePageText('Profile')}
    >
      <StyledProfileItem>
        <div className="profile-infos">
          <p className="profile-name">{props.name}</p>
          <p className="profile-email">{props.email}</p>
        </div>
        <div>
          <img src={props.image} height="40px" width="40px" />
        </div>
      </StyledProfileItem>
    </Link>
  );
};

export default ProfileItem;
