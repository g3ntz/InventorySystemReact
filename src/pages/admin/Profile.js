import React from "react";
import { StyledForm } from "../../components/shared/Form/Form.styled";

const Profile = () => {
  return (
    <StyledForm isCentered={true}>
      <h2>Edit Your Profile Infos</h2>
      <form id="profile-form" action="">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" name="username" defaultValue="Filan" />
          <small>Error message</small>
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            maxLength="50"
            defaultValue="Filan@gmail.com"
          />
          <small>Error message</small>
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            defaultValue="Password123"
          />
          <small>Error message</small>
        </div>

        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            maxLength="40"
            defaultValue="Password123"
          />
          <small>Error message</small>
        </div>

        <div className="input-group">
          <label htmlFor="status">Status</label>
          <select name="status" id="status" disabled>
            <option defaultValue="Active">Active</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="role">Role</label>
          <select name="role" id="role" disabled>
            <option defaultValue="User">User</option>
          </select>
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </StyledForm>
  );
};

export default Profile;
