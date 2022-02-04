import React from "react";
import { StyledForm } from "../../components/shared/Form/Form.styled";
import useForm from "../../hooks/useForm";

const UserCRUD = () => {
  const onSuccess = () => {  
    alert('success');
  };

  const onError = (event) => {
    alert('There are empty required fields, please fill them');
  };

  //Custom hook call
  const { handleChange, values, errors, handleSubmit } = useForm(onSuccess, onError);

  return (
    <StyledForm isCentered={true}>
      <h2>Create a new User</h2>
      <form id="profile-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" name="username" val-required="true" onChange={handleChange} />
          {errors.username && (
            <small style={{ opacity: 1 }}>{errors.username}</small>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
          <small>Error message</small>
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
          <small>Error message</small>
        </div>

        <div className="input-group">
          <label htmlFor="role">Role</label>
          <select name="role" id="role">
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>

        <button type="submit">Create User</button>
      </form>
    </StyledForm>
  );
};

export default UserCRUD;
