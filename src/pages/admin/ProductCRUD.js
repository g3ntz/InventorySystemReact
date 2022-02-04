import React from "react";
import { StyledForm } from "../../components/shared/Form/Form.styled";

const ProductCRUD = () => {
  return (
    <StyledForm isCentered={true}>
      <h2>Create a new Product</h2>
      <form id="profile-form" action="">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" />
          <small>Error message</small>
        </div>

        <div className="input-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="2"
          ></textarea>
          <small>Error message</small>
        </div>

        <div className="input-group">
          <label htmlFor="serialNr">Serial Nr</label>
          <input id="serialNr" type="text" name="serialNr" />
          <small>Error message</small>
        </div>

        <div className="input-group">
          <label htmlFor="stock">Stock</label>
          <input id="stock" type="number" name="stock" />
          <small>Error message</small>
        </div>

        <div className="input-group">
          <label htmlFor="price">Price</label>
          <input id="price" type="text" name="price" />
          <small>Error message</small>
        </div>

        <div className="input-group">
          <label htmlFor="category">Category</label>
          <select name="category" id="category">
            <option value="Electronics">Electronics</option>
          </select>
        </div>

        <button type="submit">Create Product</button>
      </form>
    </StyledForm>
  );
};

export default ProductCRUD;
