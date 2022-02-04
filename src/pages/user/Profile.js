import React from "react";
import { StyledForm } from "../../components/shared/Form/Form.styled";

const Profile = () => {
  return (
    <StyledForm isCentered={true}>
      <h2>Edit Your Profile Infos</h2>
      <form id="profile-form" action="">
        <div class="input-group">
          <label for="username">Username</label>
          <input id="username" type="text" name="username" value="Filan" />
          <small>Error message</small>
        </div>

        <div class="input-group">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            maxlength="50"
            value="Filan@gmail.com"
          />
          <small>Error message</small>
        </div>

        <div class="input-group">
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value="Password123"
          />
          <small>Error message</small>
        </div>

        <div class="input-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            maxlength="40"
            value="Password123"
          />
          <small>Error message</small>
        </div>

        <div class="input-group">
          <label for="status">Status</label>
          <select name="status" id="status" disabled>
            <option value="Active">Active</option>
          </select>
        </div>

        <div class="input-group">
          <label for="role">Role</label>
          <select name="role" id="role" disabled>
            <option value="User">User</option>
          </select>
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </StyledForm>
  );
};

export default Profile;
