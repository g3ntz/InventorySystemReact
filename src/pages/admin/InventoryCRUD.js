import React from "react";
import { StyledForm } from "../../components/shared/Form/Form.styled";
import useForm from "../../hooks/useForm";

const InventoryCRUD = () => {
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
      <h2>Create a new Inventory</h2>
      <form id="profile-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="receiver">Receiver</label>
          <input id="receiver" type="text" name="receiver" val-required="true" onChange={handleChange} />
          {errors.receiver && (
            <small style={{ opacity: 1 }}>{errors.receiver}</small>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="product">Product</label>
          <input id="product" type="text" name="product" val-required="true" onChange={handleChange} />
          {errors.product && (
            <small style={{ opacity: 1 }}>{errors.product}</small>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="quantity">Quantity</label>
          <input id="quantity" type="number" name="quantity" val-required="true" onChange={handleChange} />
          {errors.quantity && (
            <small style={{ opacity: 1 }}>{errors.quantity}</small>
          )}
        </div>


        <button type="submit">Create Inventory</button>
      </form>
    </StyledForm>
  );
};

export default InventoryCRUD;
