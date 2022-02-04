import React from 'react'
import { StyledForm } from '../../components/shared/Form/Form.styled'
import useForm from '../../hooks/useForm'

const RequestsCRUD = () => {
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
      <h2>Create a new Request</h2>
      <form id="profile-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="request">Request</label>
          <textarea
            style={{resize: 'vertical', maxHeight: '20vw'}}
            cols="30"
            rows="10"
            id="request"
            name="request"
            val-required="true"
            onChange={handleChange}
          ></textarea>
          {errors.request && (
            <small style={{ opacity: 1 }}>{errors.request}</small>
          )}
        </div>

        <button type="submit">Create Inventory</button>
      </form>
    </StyledForm>
  )
}

export default RequestsCRUD
