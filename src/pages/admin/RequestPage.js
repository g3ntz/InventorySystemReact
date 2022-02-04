import React from "react";
import useForm from "../../hooks/useForm";
import { StyledForm } from "../../components/shared/Form/Form.styled";

const RequestPage = () => {
  const onSuccess = () => {
    alert("success");
  };

  const onError = (event) => {
    alert("There are empty required fields, please fill them");
  };

  //Custom hook call
  const { handleChange, values, errors, handleSubmit } = useForm(
    onSuccess,
    onError
  );

  return (
    <StyledForm isCentered={true}>
      <h2>Manage Request</h2>
      <form id="profile-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="request">Request</label>
          <textarea
            disabled
            style={{ resize: "vertical", maxHeight: "20vw" }}
            cols="30"
            rows="10"
            id="request"
            name="request"
            val-required="true"
            // onChange={handleChange}
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas saepe, totam repellendus eius, inventore ad praesentium magnam ex sunt tempora nisi exercitationem fuga aut, ratione beatae voluptates ipsum est nam?
          Earum, hic sunt nesciunt soluta sint tempore optio nisi tempora excepturi placeat dignissimos quisquam itaque officiis aspernatur aliquid in nemo laborum molestias blanditiis ipsam libero quibusdam suscipit quas facilis! Explicabo?
          Quis autem officiis harum quos provident nam architecto possimus esse quas dolorum repellendus voluptas repudiandae, voluptate officia! Corporis molestias quidem nihil, totam quaerat qui rem consectetur, quia numquam dolore maxime?
          Laboriosam in natus repellendus fugit distinctio provident dignissimos, consequatur neque impedit atque totam sed consequuntur incidunt quam? Ratione et alias tempore, illo fugiat quam deserunt odit, iste facere magni ullam.
          Maiores at nobis tempore labore illo amet, magnam exercitationem libero natus saepe ipsam laboriosam eius alias non nesciunt voluptas. Cupiditate quaerat voluptatum at, saepe quod vitae iusto temporibus tenetur possimus?
          Iure possimus atque laboriosam vero aspernatur ducimus. Expedita, nisi recusandae? Tempore voluptatibus, quae dignissimos cum alias, exercitationem praesentium dolores laboriosam error laudantium quaerat ab corporis deserunt voluptate. Facilis, illo beatae.
         </textarea>
          {errors.request && (
            <small style={{ opacity: 1 }}>{errors.request}</small>
          )}
        </div>

        <div className="input-group">
          <label style={{ marginTop: '10px', display: 'block'}}>Status: <span style={{color: 'orange', marginLeft: '5px'}}>Pending</span></label>
        </div>

        <div className="input-group" style={{marginTop: '15px'}}>
          <label htmlFor="note">Add Note</label>
          <textarea
            cols="30"
            rows="3"
            id="note"
            name="note"
          >

          </textarea>
        </div>

        <button type="submit">Approve</button>
        <button type="submit" style={{ backgroundColor: "red" }}>
          Reject
        </button>
      </form>
    </StyledForm>
  );
};

export default RequestPage;
